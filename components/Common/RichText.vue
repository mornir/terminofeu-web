<template>
  <SanityContent :blocks="blocks" :serializers="serializers" />
</template>

<script>
import externalLink from '@/components/serializers/ExternalLink'
import internalLink from '@/components/serializers/InternalLink'

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
          internalLink,
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
