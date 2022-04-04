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
