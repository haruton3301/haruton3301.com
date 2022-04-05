<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <PageTitle :title="title" />
    <TagList :tags="tags" />
  </div>
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    Breadcrumb: () => import('@/components/Breadcrumb.vue'),
    PageTitle: () => import('@/components/PageTitle.vue'),
    TagList: () => import('@/components/TagList.vue'),
  },

  async asyncData({ params }) {
    const entries = await contentfulClient.getEntries({
      content_type: 'tags',
      order: 'sys.createdAt',
    })

    console.log(entries)

    const tags = []
    for (let i = 0; i < entries.items.length; i++) {
      tags.push({
        name: entries.items[i].fields.name,
        slug: entries.items[i].fields.slug,
        to: `/tags/${entries.items[i].fields.slug}`,
      })
    }

    return {
      tags,
    }
  },
  data() {
    return {
      title: 'タグ一覧',
    }
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: 'タグ一覧',
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://haruton3301.com/tags`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `タグ一覧 | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'タグ一覧ページです。',
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
          },
        ],
      }
    },
  },
}
</script>
