import type { NextConfig } from 'next';
import createMDX from '@next/mdx';
// import remarkGfm from 'remark-gfm';
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
      {
        hostname: 'www.notion.so',
      },
    ],
  },
  // 마크다운과 MDX 파일을 포함하도록 `pageExtensions` 구성
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  // 필요한 경우 여기에 다른 Next.js 설정을 추가할 수 있습니다
};

const withMDX = createMDX({
  // 필요한 마크다운 플러그인을 여기에 추가하세요
  options: {
    // remarkPlugins: [remarkGfm],
    // ts-expect-error remark-gfm 타입 충돌 문제 해결
    // remarkPlugins: [['remark-gfm']],
  },
});

// MDX 설정을 Next.js 설정과 병합
export default withMDX(nextConfig);
