<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
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
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer />
      <img
        class="header-logo"
        src="~/assets/header_logo.png"
        unselectable="on"
        onSelectStart="return false;"
      />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
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
      fixed: false,
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
      miniVariant: false,
      right: true,
      rightDrawer: false,
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
      rgb(255, 0, 128)
    )
    1 / 1 / 0 stretch;
}

.header-logo {
  height: 68%;
  pointer-events: none;
  user-select: none; /* CSS3 */
  -moz-user-select: none; /* Firefox */
  -webkit-user-select: none; /* Safari、Chromeなど */
  -ms-user-select: none; /* IE10かららしい */
}
</style>
