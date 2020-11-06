<template functional>
  <h2 class="relative mb-4 text-2xl font-bold"><slot /></h2>
</template>

<style scoped>
h2::before {
  position: absolute;
  left: -18px;
  content: '';
  height: 100%;
  width: 10px;
  background-color: #dd6b20;
}
</style>
