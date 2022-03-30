<template>
  <div class="pb-6">
    <v-row>
      <v-col v-for="(post, key) in posts" :key="key" cols="12" sm="6" md="4" lg="3" xl="3">
        <ArticleCard :id="post.sys.id" :fields="post.fields" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import contentfulClient from '@/plugins/contentful'

export default {
  components: {
    ArticleCard: () => import('@/components/ArticleCard.vue')
  },
  asyncData() {
    return contentfulClient
      .getEntries({
        limit: 4,
        order: 'sys.createdAt'
      })
      .then((entries) => {
        console.warn(entries.items)
        return {
          posts: entries.items
        }
      })
      .catch(console.error)
  },
  data() {
    return {
    }
  }
}
</script>
