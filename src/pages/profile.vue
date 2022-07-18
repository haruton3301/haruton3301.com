<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <PageTitle :title="title" />
    <v-row>
      <v-col cols="12" class="px-0 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-0">
        <article class="my-0 px-7 py-7 white-bg article-single">
          <p>
            このサイトは、はるとん(<a
              href="https://twitter.com/haruton3301/"
              target="_blank"
              rel="noopener"
              >@haruton3301</a
            >)が技術的なメモをつらつらと書くブログです。
          </p>
          <p>
            当サイトで引用している文章・画像について、著作権は引用元にあります。
          </p>
          <p>
            ただ万が一、不適切な記事や画像、リンク等がありましたら早急に削除等の対応を致しますので、
            当サイトの『お問合わせ』からご連絡下さい。
          </p>
          <p>また、その他ご意見ご感想なども『お問合わせ』からお願いします。</p>
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
      title: '運営者情報',
    }
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: '運営者情報',
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
          content: `運営者情報 | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: '運営者情報のページです。',
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
            name: '運営者情報',
          },
        ],
      }
    },
  },
}
</script>
