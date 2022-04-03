<template>
  <v-row>
    <v-col cols="12" class="mt-4 px-0 px-sm-7 px-md-7 px-lg-7 px-xl-7 py-4">
      <section class="pa-4 rainbow-bg">
        <h1>{{ _title }}</h1>
      </section>
    </v-col>
  </v-row>
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
