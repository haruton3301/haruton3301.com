<template>
  <v-row>
    <v-col cols="12">
      <section>
        <v-row
          v-for="(post, key) in posts"
          :key="key"
          class="pa-0 pt-0 article-list-row"
        >
          <v-col cols="12" class="px-0 px-sm-7 px-md-7 px-lg-7 px-xl-7 py-0">
            <article>
              <ArticleCard :post="post" />
            </article>
          </v-col>
        </v-row>
      </section>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.article-list-row + .article-list-row {
  margin-top: 32px;
}
</style>
