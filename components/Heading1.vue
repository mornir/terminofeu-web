<template functional>
  <h1 class="relative mb-2 text-2xl font-bold leading-normal lg:text-3xl">
    <slot />
  </h1>
</template>

<style lang="postcss" scoped>
h1::before {
  content: '';
  @apply bg-primary absolute;
  position: absolute;
  left: -16px;
  height: 35px;
  width: 9px;
}
</style>
