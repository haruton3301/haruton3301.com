<template>
  <v-app dark>
    <v-overlay :value="isLoading">
      <v-row justify="center" class="pb-8">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-row>
      <v-row>{{ loadMessage }}</v-row>
    </v-overlay>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <nuxt-link v-ripple to="/" class="header-logo">
        <v-row class="ma-0" justify="center" style="height: 100%">
          <img src="~/assets/header_logo.png" />
        </v-row>
      </nuxt-link>
      <v-spacer />
    </v-app-bar>
    <v-main class="my-main">
      <v-container>
        <v-row justify="center" align-content="center">
          <v-col xl="6" lg="9" md="12" sm="12" cols="12" class="pa-0">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app absolute class="my-footer">
      <v-spacer />
      <span>&copy; 2022 {{ title }}</span>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      isLoading: true,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'mdi-email',
          title: 'Contact',
          to: '/contact',
        },
        {
          icon: 'mdi-shield',
          title: 'Policy',
          to: '/policy',
        },
      ],
      title: 'はるとんのブログ',
    }
  },
  mounted() {
    this.isLoading = false
  },
}
</script>

<style>
header {
  border-top: 4px solid;
  border-image: -moz-linear-gradient(
      to right,
      rgb(64, 224, 208),
      rgb(255, 140, 0) 40%,
      rgb(237, 227, 232)
    )
    1 / 1 / 0 stretch;
  border-image: -webkit-linear-gradient(
      to right,
      rgb(64, 224, 208),
      rgb(255, 140, 0) 40%,
      rgb(237, 227, 232)
    )
    1 / 1 / 0 stretch;
  border-image: linear-gradient(
      to right,
      rgb(64, 224, 208),
      rgb(255, 140, 0) 40%,
      rgb(237, 227, 232)
    )
    1 / 1 / 0 stretch;
}

.v-toolbar__content {
  padding: 0 16px 4px;
}

.header-logo {
  display: block;
  height: 100%;
  padding: 0 32px;
  border-radius: 16px;
  color: gray !important;
}
.header-logo img {
  height: 34px;
  margin: auto 0;
  pointer-events: none;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
}

.my-main {
  background-color: #f5f5f5;
}

.my-footer {
  background-color: #2f3232 !important;
  color: #ffffff !important;
}

.white-bg {
  background-color: #ffffff;
}
</style>
