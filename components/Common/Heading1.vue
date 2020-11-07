<template functional>
  <h1 class="relative mb-4 text-2xl font-bold"><slot /></h1>
</template>

<style scoped>
h1::before {
  position: absolute;
  left: -18px;
  content: '';
  height: 100%;
  width: 10px;
  background-color: #dd6b20;
}
</style>
