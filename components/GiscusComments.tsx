'use client';
import Giscus from '@giscus/react';

{
  /* <script src="https://giscus.app/client.js"
        data-repo="ryugotthis/notion-blog-nextjs-giscus"
        data-repo-id="R_kgDOPQojvA"
        data-category="Announcements"
        data-category-id="DIC_kwDOPQojvM4CtRJ0"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        data-loading="lazy"
        crossorigin="anonymous"
        async>
</script> */
}

export default function GiscusComments() {
  return (
    <Giscus
      repo="ryugotthis/notion-blog-nextjs-giscus"
      repoId="R_kgDOPQojvA"
      category="Announcements"
      categoryId="DIC_kwDOPQojvM4CtRJ0"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="preferred_color_scheme"
      lang="ko"
      loading="lazy"
    />
  );
}
