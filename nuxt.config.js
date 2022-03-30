import colors from 'vuetify/es5/util/colors'

const baseUrl = 'https://haruton3301.com'

const siteTitle = 'はるとんのブログ'
const siteDescription = '忘れないように技術メモを残します'

export default {
  srcDir: 'src',
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate(title) {
      return (title ? `${title} | ` : '') + 'はるとんのブログ'
    },
    // title: 'はるとんのブログ',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: siteDescription,
      },
      { hid: 'og:site_name', property: 'og:site_name', content: siteTitle },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: baseUrl,
      },
      { hid: 'og:title', property: 'og:title', content: siteTitle },
      {
        hid: 'og:description',
        property: 'og:description',
        content: siteDescription,
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${baseUrl}/ogp.png`,
      },
      { name: 'twitter:card', content: 'summary' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/dotenv'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      // dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: { fallback: '404.html' },

  // dotenv
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID,
  },
}
