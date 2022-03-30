<template>
  <Article :fields="post.fields" />
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    Article: () => import('@/components/Article.vue')
  },
  asyncData({ params }) {
    return contentfulClient
      .getEntry(params.id)
      .then((entry) => {
        return {
          post: entry
        }
      })
      .catch(console.error)
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: this.post.fields.title
    }
  }
}
</script>
