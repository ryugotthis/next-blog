import ProfileSection from '@/app/_components/features/ProfileSection';
import { getPublishedPosts, getTags } from '@/lib/notion';
import ContactSection from '@/app/_components/features/ContactSection';

import HeaderSection from '@/app/_components/features/HeaderSection';
import PostListSuspense from '@/components/features/blog/PostListSuspense';
import { Suspense } from 'react';
import TagSectionClient from '@/app/_components/features/TagSection.client';
import PostListSkelecton from '@/components/features/blog/PostListSkeleton';
import TagSectionSkeleton from '@/app/_components/features/TagSectionSkeleton';

interface HomeProps {
  searchParams: Promise<{ tag?: string; sort?: string }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const { tag, sort } = await searchParams;
  const selectedTag = tag || '전체';
  const selectedSort = sort || 'latest';

  const tags = getTags(); //  결과값은 아직 안 나온 상태 유지 -> props로 넘겨줄려고
  const postsPromise = getPublishedPosts({
    tag: selectedTag,
    sort: selectedSort,
  });

  return (
    <div className="container py-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr_220px]">
        {/* 좌측 사이드바 */}
        <aside className="order-2 md:order-none">
          <Suspense fallback={<TagSectionSkeleton />}>
            <TagSectionClient tags={tags} selectedTag={selectedTag} />
          </Suspense>
        </aside>
        <div className="order-3 space-y-8 md:order-none">
          {/* 섹션 제목 */}
          <HeaderSection selectedTag={selectedTag} />
          {/* 블로그 카드 그리드 */}
          <Suspense fallback={<PostListSkelecton />}>
            <PostListSuspense postsPromise={postsPromise} />
          </Suspense>
        </div>
        {/* 우측 사이드바 */}
        <aside className="order-1 flex flex-col gap-6 md:order-none">
          <ProfileSection />
          <ContactSection />
        </aside>
      </div>
    </div>
  );
}
