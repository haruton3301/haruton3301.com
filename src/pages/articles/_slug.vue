<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <Article :post="post" />
    <PageTitle v-if="relatedPosts.length > 0" :title="title" class="mt-12" />
    <ArticleList :posts="relatedPosts" />
  </div>
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    Article: () => import('@/components/Article.vue'),
    Breadcrumb: () => import('@/components/Breadcrumb.vue'),
    PageTitle: () => import('@/components/PageTitle.vue'),
    ArticleList: () => import('@/components/ArticleList.vue'),
  },
  async asyncData({ params }) {
    const entries = await contentfulClient.getEntries({
      content_type: 'article',
      'fields.slug': params.slug,
      limit: 1,
    })

    let tagQuery = ''
    for (let i = 0; i < entries.items[0].fields.tags.length; i++) {
      const separater =
        i !== entries.items[0].fields.tags.length - 1 ? ', ' : ''
      tagQuery += `${entries.items[0].fields.tags[i].fields.slug}${separater}`
    }

    console.log(tagQuery)

    const _relatedPosts = await contentfulClient.getEntries({
      content_type: 'article',
      order: '-sys.createdAt',
      'metadata.tags.sys.id[in]': tagQuery,
      limit: 6,
    })

    const nowSlug = entries.items[0].fields.slug
    _relatedPosts.items = _relatedPosts.items.filter(
      (item) => !(item.fields.slug === nowSlug)
    )

    return {
      post: entries.items[0],
      relatedPosts: _relatedPosts.items,
    }
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
  data() {
    return {
      title: '関連記事',
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
