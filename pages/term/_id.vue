<template>
  <div>
    <h1>TERM</h1>
  </div>
</template>

<script>
export default {
  name: 'TermDetails',
  nuxtI18n: {
    paths: {
      de: '/begriff/:slug/',
      fr: '/terme/:slug/',
      it: '/termino/:slug/',
    },
  },
}
</script>
