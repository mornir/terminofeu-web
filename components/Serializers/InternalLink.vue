<template>
  <nuxt-link v-if="path" :to="path" class="underline"><slot /></nuxt-link>
</template>

<script>
export default {
  name: 'InternalLink',
  props: {
    slug: {
      type: String,
      require: true,
      default: '',
    },
    type: {
      type: String,
      require: true,
      default: '',
    },
  },
  computed: {
    path() {
      // https://github.com/sanity-io/sanity/issues/1827
      if (!this.$slots.default[0] || !this.$slots.default[0].text) return false

      if (this.slug === '/') return '/'

      const paths = {
        page: '/',
        employee: '/team/',
        student: '/schüler/',
      }
      return paths[this.type] + this.slug + '/'
    },
  },
}
</script>
