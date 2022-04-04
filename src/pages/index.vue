<template>
  <ArticleList :posts="posts" />
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    ArticleList: () => import('@/components/ArticleList.vue'),
  },
  asyncData() {
    return contentfulClient
      .getEntries({
        limit: 10,
        content_type: 'article',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        console.warn(entries.items)
        return {
          posts: entries.items,
        }
      })
      .catch(console.error)
  },
  data() {
    return {}
  },
}
</script>
