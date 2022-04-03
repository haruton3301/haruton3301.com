<template>
  <v-card
    :to="to"
    nuxt
    class="px-6 py-4"
    width="100%"
    rounded="0"
    elevation="0"
  >
    <section class="date">
      <time :datetime="createdAtDateTime" itemprop="datepublished">
        {{ createdAt }}
      </time>
      に投稿
    </section>
    <seciton>
      <h2>{{ title }}</h2>
    </seciton>
    <section class="tags mb-1">
      <v-icon class="mr-1 tag-icon">mdi-tag</v-icon>
      <nuxt-link
        v-for="tag in tags"
        :key="tag.name"
        :to="tag.to"
        class="mr-1"
        >{{ tag.name }}</nuxt-link
      >
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
      console.log(tags)
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
h2 {
  font-size: 24px;
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
.tag-icon {
  font-size: 16px !important;
}
</style>
