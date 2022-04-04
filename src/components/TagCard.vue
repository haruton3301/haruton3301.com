<template>
  <v-btn :to="to" nuxt elevation="2" rounded class="mx-2 my-1">
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  props: {
    tag: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return this.tag.name
    },
    to() {
      return '/tags/' + this.tag.slug
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  text-transform: none !important;
}
article {
  margin: 4px;

  display: inline-block;
}
h2 {
  padding: 4px 10px;
  border: 1px solid #000000;
  border-radius: 24px;
  font-size: 18px;
  font-weight: normal;
}
</style>
