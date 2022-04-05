<template>
  <v-overlay :value="loading">
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script>
export default {
  data: () => {
    return {
      loading: false
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>
