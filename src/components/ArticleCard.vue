<template>
  <v-card :to="to" class="pt-6" height="100%" elevation="1">
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    fields: {
      type: Object,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    title() {
      return this.fields.title
    },
    to() {
      return '/articles/' + this.id
    }
  }
}
</script>
