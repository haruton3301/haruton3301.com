<template>
  <v-row>
    <v-col cols="12" class="px-0 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-0">
      <section class="white-bg px-4 py-6">
        <TagCard v-for="(tag, key) in tags" :key="key" :tag="tag" />
      </section>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    tags: {
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
