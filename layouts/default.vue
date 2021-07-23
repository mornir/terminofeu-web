<template>
  <div class="min-h-screen bg-gray-200">
    <div class="max-w-2xl mx-auto font-sans bg-white">
      <Banner>Alle Inhalte sind noch in der Bearbeitung.</Banner>
      <TheHeader />
      <Nuxt class="py-6" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
}
</script>

<style lang="postcss">
body {
  font-size: 18px;
}

.underline {
  text-decoration-color: #dd6b20 !important;
}
</style>
