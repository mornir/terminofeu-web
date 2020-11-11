<template>
  <SanityContent :blocks="blocks" :serializers="serializers" />
</template>

<script>
import externalLink from '@/components/serializers/ExternalLink'
import linkToEntry from '@/components/serializers/LinkToEntry'

export default {
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
          externalLink,
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
