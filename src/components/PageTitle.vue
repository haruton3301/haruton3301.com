<template>
  <v-row class="pb-5">
    <v-col cols="12" class="px-0 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-0">
      <section class="rainbow-bg">
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
  font-size: 30px;
}
.rainbow-bg {
  padding: 14px 0;
  background: -moz-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: -webkit-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
}
</style>
