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
}
</script>
