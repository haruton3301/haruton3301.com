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
  asyncData() {
    return contentfulClient
      .getEntries({
        limit: 10,
        content_type: 'article',
        order: 'sys.createdAt',
      })
      .then((entries) => {
        console.log(entries.items)
        return {
          posts: entries.items,
        }
      })
      .catch(console.error)
  },
  data() {
    return {
      title: 'Articles',
    }
  },
}
</script>
