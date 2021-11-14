<template>
  <NuxtLink
    class="flex-1 py-2 text-base font-semibold tracking-wide text-center text-white focus:outline-none"
    :class="{ 'bg-primary-alt': $i18n.locale === code }"
    :to="switchLocalePath(code)"
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  name: 'LangLink',
  props: {
    code: {
      type: String,
      required: true,
    },
  },
  methods: {
    // switchLang() {
    // this.switchLocalePath(this.code)
    // Prevent API calls within term & entry pages
    // https://github.com/nuxt-community/i18n-module/issues/68#issuecomment-475792915
    /*    if (this.$route.name.includes('entry')) {
        this.$i18n.locale = this.code
        window.history.replaceState('', '', this.switchLocalePath(this.code))
      } else {
        this.$router.push(this.switchLocalePath(this.code))
      } */
    // },
  },
}
</script>
