<template>
  <footer class="px-8 pt-6 pb-8 mt-6 border-t-2 border-orange-300">
    <Heading2>{{ $t('builtWith') }}</Heading2>

    <div class="flex items-end gap-x-8">
      <a href="https://www.sanity.io/" target="_blank">
        <span class="sr-only">Visit Sanity website</span>
        <SanityLogo class="w-28" />
      </a>
      <a href="https://nuxtjs.org/" target="_blank">
        <span class="sr-only">Visit Nuxt website</span>
        <NuxtLogo class="w-28" />
      </a>
    </div>
  </footer>
</template>

<script>
import SanityLogo from '@/assets/logos/sanity.svg'
import NuxtLogo from '@/assets/logos/nuxt.svg'
export default {
  name: 'TheFooter',
  components: {
    SanityLogo,
    NuxtLogo,
  },
}
</script>
