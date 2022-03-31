<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :clipped="clipped" fixed app>
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
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer app>
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
      clipped: false,
      drawer: false,
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
      ],
      title: 'はるとんのブログ',
    }
  },
}
</script>

<style>
header {
  border-top: 4px solid;
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
  border-radius: 8px;
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
</style>
