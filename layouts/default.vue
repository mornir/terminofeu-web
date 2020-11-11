<template>
  <div class="font-sans">
    <TheHeader v-if="!$route.name.includes('term')" />
    <Nuxt class="px-8 py-6" />
  </div>
</template>

<style lang="postcss">
body {
  font-size: 18px;
}

.underline {
  text-decoration-color: #dd6b20 !important;
}
</style>
