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

  asyncData() {
    return contentfulClient
      .getEntries({
        // limit: 10,
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
      title: '記事一覧',
    }
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: '投稿一覧',
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://haruton3301.com/articles`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `投稿一覧 | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '投稿一覧ページです。',
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
          },
        ],
      }
    },
  },
}
</script>
