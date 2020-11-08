<template>
  <nuxt-link
    class="flex-1 py-2 text-base font-semibold tracking-wide text-center text-white focus:outline-none"
    :class="[$i18n.locale === code ? 'bg-orange-700' : 'text-black']"
    :to="switchLocalePath(code)"
  >
    <slot />
  </nuxt-link>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  methods: {
    switchLang() {
      // Prevent API calls within term & entry pages
      if (this.$route.name.match(/term|entry/g)) {
        // https://github.com/nuxt-community/i18n-module/issues/68#issuecomment-475792915
        this.$i18n.locale = this.code
        window.history.replaceState('', '', this.switchLocalePath(this.code))
      } else {
        this.$router.push(this.switchLocalePath(this.code))
      }
    },
  },
}
</script>
