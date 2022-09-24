<template>
  <div class="min-h-screen bg-gray-200">
    <div class="max-w-2xl mx-auto font-sans bg-white">
      <TopBanner>{{ $t('stickyBanner') }}</TopBanner>
      <TheHeader />
      <Nuxt class="py-6" />
      <TheFooter />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="postcss">
html {
  scrollbar-gutter: stable;
}

body {
  font-size: 18px;
}

.underline {
  text-decoration-color: #dd6b20 !important;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>
