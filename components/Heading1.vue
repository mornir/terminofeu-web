<template functional>
  <h1 class="relative mb-4 text-2xl font-bold leading-normal"><slot /></h1>
</template>

<style lang="postcss" scoped>
h1::before {
  content: '';
  @apply bg-primary absolute;
  position: absolute;
  top: 6px;
  left: -16px;
  height: 22px;
  width: 9px;
}
</style>
