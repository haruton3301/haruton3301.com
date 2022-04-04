<template>
  <v-card v-ripple class="px-6 py-4 article-card" rounded="0" elevation="0">
    <nuxt-link :to="to" class="article-card-link" />
    <section class="date">
      <time :datetime="createdAtDateTime" itemprop="datepublished">
        {{ createdAt }}
      </time>
      に投稿
    </section>
    <section>
      <h2>{{ title }}</h2>
    </section>
    <section class="tags mb-1">
      <v-icon class="mr-1 tag-icon">mdi-tag</v-icon>
      <nuxt-link v-for="tag in tags" :key="tag.name" :to="tag.to" class="mr-1">
        {{ tag.name }}
      </nuxt-link>
    </section>
  </v-card>
</template>

<script>
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
    title() {
      return this.post.fields.title
    },
    to() {
      return '/articles/' + this.post.fields.slug
    },
    createdAt() {
      return this.formatDate(this.post.sys.createdAt)
    },
    createdAtDateTime() {
      return this.formatDateTime(this.post.sys.createdAt)
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
.article-card {
  position: relative;
}
.article-card:hover::after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  content: '';
  pointer-events: none;

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
.article-card-link {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
h2 {
  display: inline-block;
  font-size: 24px;
}
.article-card:hover h2 {
  background: -moz-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: -webkit-linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background: linear-gradient(to right, #40e0d0, #ff8c00 40%, #ff0080);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(128, 128, 128, 0);
}
.date {
  font-size: 14px;
  line-height: 1.8;
  color: rgba(0, 0, 0, 0.6);
}
.tags a {
  position: relative;
  z-index: 1;
  color: rgba(0, 0, 0, 0.6) !important;
  font-size: 14px;
  line-height: 1.8;
  text-decoration: none;
}
.tags a:hover {
  text-decoration: underline;
}
.tag-icon {
  font-size: 16px !important;
}
</style>
