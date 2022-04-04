<template>
  <v-row>
    <v-col cols="12" class="px-0 px-sm-7 px-md-7 px-lg-7 px-xl-7 py-0">
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
