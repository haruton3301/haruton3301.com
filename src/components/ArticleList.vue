<template>
  <section class="my-8 mx-1">
    <v-row>
      <v-col v-for="(post, key) in posts" :key="key" cols="12" class="pa-2">
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
