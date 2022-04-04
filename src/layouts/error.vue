<template>
  <div>
    <v-row class="mt-8" justify="center">
      <v-col
        cols="12"
        class="px-0 px-sm-7 px-md-7 px-lg-7 px-xl-7 py-0 error-text-wrap"
      >
        <div class="error-text">404 Not Found.</div>
        <div class="link py-4">
          <v-btn to="/" nuxt>Homeに戻る</v-btn>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.error-display {
}
.error-text-wrap {
  text-align: center;
}
.error-text-wrap .error-text {
  display: inline-block;
  width: 400px;
  margin: 0 auto;
  text-align: center;
  background: -moz-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: -webkit-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 40px;
}
</style>
