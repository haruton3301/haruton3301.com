<template>
  <div class="py-3">
  <v-row>
    {{ title }}
  </v-row>
   <v-row>
       <div v-html="content"></div>
  </v-row>
  </div>
</template>

<script>
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

export default {
  props: {
    fields: {
      type: Object,
      required: true
    }
  },
  computed: {
    title() {
      return this.fields.title
    },
    content() {
      return documentToHtmlString(this.fields.content)
    },
  }
}
</script>


