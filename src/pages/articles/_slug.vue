<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Article :post="post" />
  </div>
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    Article: () => import('@/components/Article.vue'),
    Breadcrumb: () => import('@/components/Breadcrumb.vue'),
  },
  asyncData({ params }) {
    return contentfulClient
      .getEntries({
        content_type: 'article',
        'fields.slug': params.slug,
        limit: 1,
      })
      .then((entries) => {
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
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.post.fields.description,
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.post.fields.keywords,
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://haruton3301.com/articles/${this.post.fields.slug}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.post.fields.title} | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.fields.description,
        },
      ],
    }
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: '記事一覧',
            path: '/articles/',
          },
          {
            name: this.post.fields.title,
          },
        ],
      }
    },
  },
}
</script>
