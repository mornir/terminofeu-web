<template>
  <div class="px-8 py-6">
    <section class="mt-8 mb-12">
      <h1 class="text-3xl font-bold leading-normal text-center">Terminofeu</h1>
      <TerminofeuLogo class="block w-56 mx-auto -mt-4" />
    </section>

    <section class="mb-12">
      <Heading1>
        {{ $t('search') }}
      </Heading1>

      <p class="italic">{{ $t('searchAvailableFrom') }}</p>
    </section>
    <section>
      <Heading1>
        {{ $t('index') }}
      </Heading1>

      <ul>
        <li v-for="entry in entries" :key="entry._id" class="mb-3">
          <router-link
            v-if="entry.title"
            :to="localePath({ name: 'entry-id', params: { id: entry._id } })"
            class="font-semibold hover:text-primary"
            >{{ entry.title }}
          </router-link>
        </li>
      </ul>
    </section>
    <section class="mt-12">
      <Heading2>{{ $t('builtWith') }}</Heading2>

      <div class="flex items-end gap-x-8">
        <a href="https://www.sanity.io/" target="_blank">
          <SanityLogo class="w-32" />
        </a>
        <a href="https://nuxtjs.org/" target="_blank">
          <NuxtLogo class="w-32" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import TerminofeuLogo from '@/assets/logos/arrows.svg'
import SanityLogo from '@/assets/logos/sanity.svg'
import NuxtLogo from '@/assets/logos/nuxt.svg'

const query = /* groq */ `
{
  "deEntries": *[_type == 'entry']|order(deTitle asc)
    {
      _id,
      "title": deTitle
    },
  "frEntries": *[_type == 'entry']|order(frTitle asc)
    {
      _id,
      "title": frTitle
    },
  "itEntries": *[_type == 'entry']|order(itTitle asc)
    {
      _id,
      "title": itTitle
    }
 }
`

export default {
  name: 'Home',
  components: {
    TerminofeuLogo,
    SanityLogo,
    NuxtLogo,
  },
  asyncData({ $sanity }) {
    return $sanity.fetch(query)
  },
  computed: {
    entries() {
      return this[this.$i18n.locale + 'Entries']
    },
  },
}
</script>
