<template>
  <v-overlay :value="loading">
    <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
    <v-progress-circular indeterminate size="64" />
  </v-overlay>
</template>

<script>
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

export default {
  components: {
    PulseLoader,
  },
  data: () => {
    return {
      loading: false,
    }
  },
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
  },
}
</script>
