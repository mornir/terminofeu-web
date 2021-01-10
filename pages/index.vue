<template>
  <div class="py-6">
    <section class="flex items-center justify-center mt-8 mb-10">
      <TerminofeuLogo class="w-10 mr-2 fill-current text-primary" />
      <h1 class="text-4xl font-bold">Terminofeu</h1>
    </section>

    <section class="mb-12">
      <InstantSearch
        :search-key="title"
        :search-array="entries"
        class="mb-6"
        @searched="displayResults"
        @lookedUp="openEntry"
      />
      <div class="px-8">
        <ul v-if="hasMatches" data-cy="terms-list">
          <li v-for="entry in entries" :key="entry._id" class="mb-2">
            <router-link
              v-if="entry[title]"
              :to="localePath({ name: 'entry-id', params: { id: entry._id } })"
              class="font-semibold hover:text-primary"
              >{{ entry[title] }}
            </router-link>
          </li>
        </ul>
        <p v-else>{{ $t('noResults') }}</p>
      </div>
    </section>

    <section class="px-8 mt-12">
      <Heading2>{{ $t('builtWith') }}</Heading2>

      <div class="flex items-end gap-x-8">
        <a href="https://www.sanity.io/" target="_blank">
          <SanityLogo class="w-28" />
        </a>
        <a href="https://nuxtjs.org/" target="_blank">
          <NuxtLogo class="w-28" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import TerminofeuLogo from '@/assets/logos/terminofeu.svg'
import SanityLogo from '@/assets/logos/sanity.svg'
import NuxtLogo from '@/assets/logos/nuxt.svg'

import sortOn from 'sort-on'

const query = /* groq */ `*[_type == 'entry']
    {
      _id,
      deTitle,
      frTitle,
      itTitle,
    }
`

export default {
  name: 'Home',
  components: {
    TerminofeuLogo,
    SanityLogo,
    NuxtLogo,
  },
  async asyncData({ app: { i18n, $sanity } }) {
    const results = await $sanity.fetch(query)
    const entries = sortOn(results, i18n.locale + 'Title')
    return {
      entries,
    }
  },
  data() {
    return {
      hasMatches: true,
    }
  },
  computed: {
    title() {
      return this.$i18n.locale + 'Title'
    },
  },
  methods: {
    displayResults(results) {
      this.hasMatches = results.length > 0
      if (this.hasMatches) {
        this.entries = results
      }
    },
    openEntry() {
      const id = this.entries[0]?._id
      if (!id) return
      const path = this.localePath({ name: 'entry-id', params: { id } })
      this.$router.push(path)
    },
  },
}
</script>
