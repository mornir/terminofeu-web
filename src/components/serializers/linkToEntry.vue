<template>
  <router-link
    v-if="_ref"
    :to="localePath({ name: 'entry-id', params: { id: _ref } })"
    class="underline"
    ><slot
  /></router-link>
</template>

<script>
export default {
  name: 'LinkToEntry',
  props: {
    // eslint-disable-next-line vue/prop-name-casing
    _ref: {
      type: String,
      require: true,
      default: '',
    },
  },
}
</script>
