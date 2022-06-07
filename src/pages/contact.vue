<template>
  <div>
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <PageTitle :title="title" />
    <v-row>
      <v-col cols="12" class="px-0 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-0">
        <iframe
          id="em-form"
          title="em-form"
          frameborder="0"
          allowtransparency="true"
          scrolling="no"
          style="width: 100%; height: 600px"
          src="https://em-form.web.app/api/tVjIPSYYo5MjqPUvoNp15P7bTss2-BTxlKJphAJiMF10ye8Zn?k=mZpEMrMVH7WKKujxJfeq"
        ></iframe>
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
      title: 'お問合わせ',
    }
  },
  head() {
    return {
      // nuxt.config.jsの%sに反映される内容
      title: 'お問合わせ',
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
          content: `お問合わせフォーム | はるとんのブログ`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'お問合わせのページです。',
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
            name: 'お問合わせ',
          },
        ],
      }
    },
  },
}
</script>
