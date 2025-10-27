<template>
  <aside
    class="sticky top-0 z-10 py-2 text-sm bg-yellow-400 md:text-lg font-semibold flex justify-center gap-2 items-center"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="hidden w-6 h-6 md:inline"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
    <p class="text-center"><slot /></p>
  </aside>
</template>

<script>
export default {
  name: 'TopBanner',
}
</script>
