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
      <nuxt-link to="/" class="header-logo">
        <img src="~/assets/header_logo.png" />
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

<style scoped>
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

.header-logo {
  display: block;
  height: 36px;
}
.header-logo img {
  height: 36px;
  pointer-events: none;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
}
</style>
