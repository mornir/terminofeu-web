<template>
  <button
    class="flex-1 py-2 font-semibold tracking-wide text-white focus:outline-none"
    :class="[$i18n.locale === code ? 'bg-orange-700' : 'text-black']"
    @click="$i18n.locale = code"
  >
    {{ name }}
  </button>
</template>

<script>
export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
