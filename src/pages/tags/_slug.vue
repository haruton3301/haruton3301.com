<template>
  <div>
    <PageTitle :title="title" />
    <ArticleList :posts="posts" />
  </div>
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    PageTitle: () => import('@/components/PageTitle.vue'),
    ArticleList: () => import('@/components/ArticleList.vue'),
  },
  async asyncData({ params }) {
    const entries = await contentfulClient.getEntries({
      limit: 10,
      // 'fields.tags.sys.contentType.sys.id': 'tags', // ←これも必要
      'metadata.tags.sys.id[all]': params.slug,
      content_type: process.env.CTF_BLOG_POST_TYPE_ID,
      order: 'sys.createdAt',
    })

    const tag = await contentfulClient.getEntries({
      limit: 1,
      content_type: 'tags',
      'fields.slug': params.slug,
      order: 'sys.createdAt',
    })

    console.log(tag)

    const tagName = tag.items[0].fields.name

    return {
      posts: entries.items,
      title: tagName,
    }
  },
  data() {
    return {}
  },
}
</script>
