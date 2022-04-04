<template>
  <v-row class="mt-0">
    <v-col cols="12" class="px-4 px-sm-7 px-md-7 px-lg-7 px-xl-7 pt-5 pb-2">
      <div class="l-breadcrumb">
        <div class="l-breadcrumb__inner">
          <ul class="l-breadcrumb__items">
            <li
              v-for="breadcrumb in breadcrumbs.data"
              :key="breadcrumb.name"
              class="l-breadcrumb__item"
            >
              <nuxt-link
                v-if="breadcrumb.path"
                v-ripple
                :to="breadcrumb.path"
                class="l-breadcrumb__text l-arrow"
              >
                {{ breadcrumb.name }}
              </nuxt-link>
              <span v-else class="l-breadcrumb__text">{{
                breadcrumb.name
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    breadcrumbs: Object,
  },
}
</script>

<style>
.l-breadcrumb {
  padding-left: 4px;
}
.l-breadcrumb__items {
  padding-left: 0 !important;
}
.l-breadcrumb li {
  display: inline-block;
  position: relative;
}
.l-breadcrumb li + li {
  padding-left: 24px;
}

.l-breadcrumb a {
  display: block;
  position: relative;
  z-index: 1;
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 14px;
  line-height: 1.8;
  text-decoration: none;
}
.l-breadcrumb a:hover {
  text-decoration: underline;
}
.l-breadcrumb span {
  position: relative;
  z-index: 1;
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 14px;
  line-height: 1.8;
  text-decoration: none;
}

.l-breadcrumb li + li:after {
  display: block;
  content: '';
  position: absolute;
  left: 9px;
  top: 9px;
  width: 0;
  height: 0;
  border-color: transparent transparent transparent gray;
  border-style: solid;
  border-width: 3.5px 0 3.5px 4px;
}
</style>
