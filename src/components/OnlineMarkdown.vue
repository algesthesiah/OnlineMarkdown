<template>
  <div>
    <div v-html="marked(value)" class="markdown-theme"></div>
  </div>
</template>

<script>
import marked from '../utils/marked'
export default {
  props: {
    value: {},
  },
  methods: {
    marked,
  },
}
</script>
