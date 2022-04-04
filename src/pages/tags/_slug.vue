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
    const [entries, tags] = await Promise.all([
      contentfulClient.getEntries({
        limit: 10,
        // 'fields.tags.sys.contentType.sys.id': 'tags', // ←これも必要
        'metadata.tags.sys.id[all]': params.slug,
        content_type: 'article',
        order: 'sys.createdAt',
      }),
      contentfulClient.getEntries({
        limit: 1,
        content_type: 'tags',
        'fields.slug': params.slug,
        order: 'sys.createdAt',
      }),
    ])

    const tagName = tags.items[0].fields.name

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
