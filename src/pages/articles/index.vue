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
        content_type: process.env.CTF_BLOG_POST_TYPE_ID,
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
