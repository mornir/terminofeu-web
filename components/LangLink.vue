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
}
</script>
