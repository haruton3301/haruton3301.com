<template>
  <v-row class="">
    <v-col cols="12" class="mx-0 mx-sm-4 mx-md-4 mx-lg-4 mx-xl-4 my-0">
      <article class="px-7 py-7 white-bg article-single">
        <section class="date">
          <span class="mr-3">
            投稿日
            <time :datetime="createdAtDateTime" itemprop="datepublished">
              {{ createdAt }}
            </time>
          </span>
          <span>
            更新日
            <time :datetime="updatedAtDateTime" itemprop="modified">
              {{ updatedAt }}
            </time>
          </span>
        </section>
        <section>
          <h1>{{ title }}</h1>
        </section>
        <section class="tags mt-2 mb-8">
          <v-icon class="mr-1">mdi-tag</v-icon>
          <nuxt-link
            v-for="tag in tags"
            :key="tag.name"
            :to="tag.to"
            class="mr-1"
            >{{ tag.name }}</nuxt-link
          >
        </section>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <section v-html="content"></section>
      </article>
    </v-col>
  </v-row>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    createdAt() {
      return this.formatDate(this.post.sys.createdAt)
    },
    updatedAt() {
      return this.formatDate(this.post.sys.updatedAt)
    },
    createdAtDateTime() {
      return this.formatDateTime(this.post.sys.createdAt)
    },
    updatedAtDateTime() {
      return this.formatDateTime(this.post.sys.updatedAt)
    },
    title() {
      return this.post.fields.title
    },
    content() {
      return documentToHtmlString(this.post.fields.content)
    },
    tags() {
      const tags = []
      for (let i = 0; i < this.post.fields.tags.length; i++) {
        const separater = i !== this.post.fields.tags.length - 1 ? ', ' : ''
        tags.push({
          name: `${this.post.fields.tags[i].fields.name}${separater}`,
          slug: this.post.fields.tags[i].fields.slug,
          to: `/tags/${this.post.fields.tags[i].fields.slug}`,
        })
      }
      return tags
    },
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'yyyy年MM月dd日', { locale: ja })
    },
    formatDateTime(date) {
      return format(new Date(date), `yyyy-MM-dd'T'HH:mm:ss'Z'`)
    },
  },
}
</script>

<style lang="scss">
.article-single {
  h1 {
    margin-top: 8px;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.4;
    color: rgba(0, 0, 0, 0.87);
    text-wrap: break-word;
    word-break: break-all;
    text-align: left;
  }
  h2 {
    font-size: 28px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2px;
    font-weight: bold;
    line-height: 1.5;
    font-feature-settings: 'palt';
    margin-top: 32px;
    margin-bottom: 16px;
    position: relative;
  }
  .date {
    font-size: 14px;
    line-height: 1.8;
    color: rgba(0, 0, 0, 0.6);
  }

  .tags a {
    color: rgba(0, 0, 0, 0.6) !important;
    font-size: 14px;
    line-height: 1.8;
    text-decoration: none;
  }
  .tags a:hover {
    text-decoration: underline;
  }
}
</style>
