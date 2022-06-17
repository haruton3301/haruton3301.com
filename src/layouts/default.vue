<template>
  <v-app dark>
    <v-overlay :value="isLoading" class="overlay">
      <v-row justify="center" class="pb-8">
        <v-progress-circular indeterminate size="64"></v-progress-circular>
      </v-row>
    </v-overlay>
    <v-navigation-drawer v-model="drawer" temporary fixed app hide-overlay>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="`${i}-1`"
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
        <v-divider class="mx-2 mt-3"></v-divider>
        <v-list-item
          v-for="(item, i) in itemsBottom"
          :key="`${i}-2`"
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

      <nuxt-link v-ripple to="/" class="header-logo">
        <v-row class="ma-0" justify="center" style="height: 100%">
          <img src="~/assets/header_logo.png" />
        </v-row>
      </nuxt-link>
    </v-app-bar>
    <v-main class="my-main">
      <v-container>
        <v-row justify="center" align-content="center">
          <v-col xl="6" lg="9" md="12" sm="12" cols="12" class="mb-6 pa-3">
            <Nuxt />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer app absolute class="my-footer">
      <div class="link">
        <v-btn
          href="https://twitter.com/haruton3301"
          text
          color="link"
          min-height="20"
          min-width="36"
          class="x-small post-link align-center"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <v-icon color="white">mdi-twitter</v-icon>
        </v-btn>
        <v-btn
          href="https://github.com/kduxwr"
          text
          color="link"
          min-height="20"
          min-width="36"
          class="x-small post-link align-center"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <v-icon color="white">mdi-github</v-icon>
        </v-btn>
      </div>
      <div class="credit">
        <v-spacer />
        <span>&copy; 2022 {{ title }}</span>
        <v-spacer />
      </div>
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
          icon: 'mdi-application',
          title: '記事一覧',
          to: '/articles',
        },
        {
          icon: 'mdi-tag',
          title: 'タグ一覧',
          to: '/tags',
        },
      ],
      itemsBottom: [
        {
          icon: 'mdi-shield',
          title: 'プライバシーポリシー',
          to: '/policy',
        },
        {
          icon: 'mdi-email',
          title: 'お問合わせ',
          to: '/contact',
        },
      ],
      title: 'はるとんのブログ',
    }
  },
  head() {
    return {
      link: [
        {
          rel: 'canonical',
          href: `https://haruton3301.com${this.$route.path}`,
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.isLoading = false
    })
  },
  methods: {
    start() {
      this.isLoading = true
    },
    finish() {
      this.isLoading = false
    },
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
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 240px;
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
  display: block !important;
  background-color: #2f3232 !important;
  color: #ffffff !important;
}
.my-footer .link {
  text-align: center;
  color: #ffffff;
  margin: 4px 0;
}

.my-footer .link a {
  padding: 0 !important;
}

.my-footer .credit {
  text-align: center;
  margin: 4px 0;
}

.white-bg {
  background-color: #ffffff;
}
.post-link {
  display: inline-block;
  word-break: break-all;
  padding: 2px 4px;
  border-radius: 5px;
  text-transform: none !important;
  white-space: normal;
  max-width: calc(100% - 30px);
  height: inherit !important;
}

.overlay {
  z-index: 10000 !important;
}
</style>
