<template>
  <SanityBlocks :blocks="blocks" :serializers="serializers" />
</template>

<script>
import { SanityBlocks } from 'sanity-blocks-vue-component'
import linkToEntry from '@/components/serializers/linkToEntry'

export default {
  components: { SanityBlocks },
  props: {
    blocks: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      serializers: {
        marks: {
          linkToEntry,
        },
      },
    }
  },
}
</script>

<style lang="postcss" scoped>
p {
  @apply mb-3;
}
ul {
  @apply list-disc ml-4;
}
</style>
