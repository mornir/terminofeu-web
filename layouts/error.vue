<template>
  <div class="grid min-h-screen px-2 place-items-center">
    <div>
      <div class="mb-7">
        <h1
          v-if="error.statusCode === 404"
          class="mb-2 text-2xl font-bold text-center"
        >
          <span class="block mb-6 text-7xl text-primary">404</span>
          {{ $t('notFound') }}
        </h1>
        <h1 v-else>{{ $t('errorMessage') }}</h1>

        <p
          v-if="error.statusCode === 404"
          class="text-lg font-semibold leading-snug text-center"
        >
          {{ $t('notFoundMessage') }}
        </p>
      </div>

      <NuxtLink class="block text-center" :to="localePath({ name: 'index' })">
        <span
          class="inline-block mb-1 text-2xl font-bold  decoration-primary animate-exit text-primary-alt"
          >EXIT</span
        >
        <ExitSVG class="w-24 mx-auto" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import ExitSVG from '@/assets/exit.svg'

export default {
  components: {
    ExitSVG,
  },
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  head: {
    title: '404',
  },
}
</script>
