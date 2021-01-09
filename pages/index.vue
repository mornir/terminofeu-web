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

      <input
        v-model="query"
        type="search"
        class="border-2 border-black focus:outline-none"
        @input="search"
      />
    </section>
    <section>
      <Heading1>
        {{ $t('index') }}
      </Heading1>

      <ul>
        <li v-for="entry in entries" :key="entry._id" class="mb-3">
          <router-link
            v-if="entry[title]"
            :to="localePath({ name: 'entry-id', params: { id: entry._id } })"
            class="font-semibold hover:text-primary"
            >{{ entry[title] }}
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
import Fuse from 'fuse.js'
import TerminofeuLogo from '@/assets/logos/arrows.svg'
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
    return {
      entries: sortOn(results, i18n.locale + 'Title'),
    }
  },
  data() {
    return {
      entries: [],
      query: '',
      fuse: null,
    }
  },
  computed: {
    title() {
      return this.$i18n.locale + 'Title'
    },
  },
  created() {
    this.fuse = new Fuse(this.entries, {
      keys: [this.title],
      includeScore: true,
    })
  },
  methods: {
    search() {
      this.entries = this.fuse
        .search(this.query)
        .filter((entry) => entry.score < 0.22)
        .map((entry) => entry.item)
    },
  },
}
</script>
