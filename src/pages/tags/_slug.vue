<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <PageTitle :title="title" />
    <ArticleList :posts="posts" />
  </div>
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    Breadcrumb: () => import('@/components/Breadcrumb.vue'),
    PageTitle: () => import('@/components/PageTitle.vue'),
    ArticleList: () => import('@/components/ArticleList.vue'),
  },

  async asyncData({ params }) {
    const [entries, tags] = await Promise.all([
      contentfulClient.getEntries({
        // 'fields.tags.sys.contentType.sys.id': 'tags', // ←これも必要
        'metadata.tags.sys.id[all]': params.slug,
        content_type: 'article',
        order: '-sys.createdAt',
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
      slug: params,
    }
  },

  data() {
    return {}
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: this.title,
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://haruton3301.com/tags/${this.slug}`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.title} | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `タグ${this.title}の一覧ページです。`,
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
            name: 'タグ一覧',
            path: '/tags/',
          },
          {
            name: this.title,
          },
        ],
      }
    },
  },
}
</script>
