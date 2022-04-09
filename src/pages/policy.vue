<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <PageTitle :title="title" />
    <v-row>
      <v-col cols="12" class="px-0 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-0">
        <article class="my-0 px-7 py-7 white-bg article-single">
          <p>
            当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
          </p>
          <p>
            このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。
          </p>
          <p>
            この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          </p>
          <p>
            この規約に関しての詳細は<a
              href="https://marketingplatform.google.com/about/analytics/terms/jp/"
              rel="noopener noreferrer"
              target="_blank"
              >Googleアナリティクスサービス利用規約</a
            >や<a
              href="https://policies.google.com/technologies/ads?hl=ja"
              rel="noopener noreferrer"
              target="_blank"
              >Googleのポリシーの規約</a
            >をご覧ください。
          </p>
        </article>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {
    Breadcrumb: () => import('@/components/Breadcrumb.vue'),
    PageTitle: () => import('@/components/PageTitle.vue'),
  },
  data() {
    return {
      title: 'プライバシーポリシー',
    }
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: 'プライバシーポリシー',
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://haruton3301.com/policy`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: `プライバシーポリシー | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'プライバシーポリシーのページです。',
        },
      ],
    }
  },
  computed: {
    breadcrumbs() {
      return {
        data: [
          {
            name: 'Home',
            path: '/',
          },
          {
            name: 'プライバシーポリシー',
          },
        ],
      }
    },
  },
}
</script>
