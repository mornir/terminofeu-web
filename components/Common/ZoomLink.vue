<template>
  <NuxtLink :to="localePath({ name: 'term-id', params: { id: id } })">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="w-6 h-6 text-gray-500 stroke-current"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
      />
    </svg>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
}
</script>
