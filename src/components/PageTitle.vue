<template>
  <section class="my-8 mx-1 pa-4 rainbow-bg">
    <h1>{{ _title }}</h1>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  computed: {
    _title() {
      return this.title
    },
  },
}
</script>

<style lang="scss">
h1 {
  color: #ffffff;
  text-align: center;
  font-size: 32px;
}
.rainbow-bg {
  background: -moz-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: -webkit-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
}
</style>
