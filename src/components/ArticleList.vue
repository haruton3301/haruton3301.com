<template>
  <section class="my-8">
    <v-row v-for="(post, key) in posts" :key="key" class="pa-0">
      <v-col cols="12" class="px-0 px-sm-7 px-md-7 px-lg-7 px-xl-7 py-0">
        <article>
          <ArticleCard :post="post" />
        </article>
      </v-col>
    </v-row>
  </section>
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
