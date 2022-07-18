<template>
  <v-row class="">
    <v-col cols="12" class="px-0 px-sm-4 px-md-4 px-lg-4 px-xl-4 py-0">
      <article
        class="py-7 py-lg-9 py-xl-9 px-5 px-sm-7 px-md-7 px-lg-9 px-xl-9 white-bg article-single"
      >
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
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import Prism from '~/plugins/prism'

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
      const contentHtml = this.$md.render(this.post.fields.contentMarkdown)

      // if (process.env.NODE_ENV !== 'production') {
      //   const parser = new DOMParser()
      //   const dom = parser.parseFromString(contentHtml, 'text/html')
      //   const images = dom.querySelectorAll('p img')

      //   images.forEach((image) => {
      //     const src = image.getAttribute('src')
      //     const fileName = src.match('.+/(.+?)([?#;].*)?$')[1]
      //     const from = `src="${src}"`
      //     const to = `src="/images/${fileName}" data-src="${src}"`
      //     contentHtml = contentHtml.replaceAll(from, to)
      //   })
      // }

      return contentHtml
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
  mounted() {
    Prism.highlightAll()
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
  word-break: break-all;

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
    display: block;
    font-size: 28px;
    border-bottom: 1px solid #ddd;
    padding-bottom: 2px;
    padding-left: 2px;
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

  ul,
  ol {
    margin-bottom: 16px;
  }
  ol li {
    padding: 4px;
  }
  ol li::marker {
    font-size: 110%;
  }

  img {
    width: 70%;
    margin-bottom: 0px;
  }
  @media screen and (max-width: 959px) {
    img {
      width: 100%;
    }
  }

  div.code-toolbar > .toolbar {
    right: 0.6em !important;
  }
  p {
    padding: 0 4px;
  }
  pre {
    margin-bottom: 16px;
  }

  .code-toolbar code {
    padding: 0.2em 0;
  }

  .youtube {
    max-width: 600px;
    aspect-ratio: 16 / 9;
  }
  .youtube iframe {
    width: 100%;
    height: 100%;
  }

  .entry-card {
    width: 100%;
    max-width: 500px;
    font-size: 18px;

    border: 4px solid;
    border-radius: 10px;
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

  .entry-card a {
    padding: 8px;
    color: rgba(0, 0, 0, 0.87);
    text-decoration: none;
    display: inline-block;
  }
}
</style>
