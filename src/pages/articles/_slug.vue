<template>
  <Article :post="post" />
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    Article: () => import('@/components/Article.vue'),
  },
  asyncData({ params }) {
    return contentfulClient
      .getEntries({
        content_type: 'article',
        'fields.slug': params.slug,
        limit: 1,
      })
      .then((entries) => {
        console.log(entries)
        return {
          post: entries.items[0],
        }
      })
      .catch(console.error)
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: this.post.fields.title,
    }
  },
}
</script>
