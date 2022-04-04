<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <PageTitle :title="title" />
    <v-row>
      <v-col cols="12" class="px-0 px-sm-7 px-md-7 px-lg-7 px-xl-7 py-0">
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
            この規約に関しての詳細はGoogleアナリティクスサービス利用規約のページやGoogleポリシーと規約ページをご覧ください。
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
