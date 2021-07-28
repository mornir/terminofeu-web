<template>
  <div class="py-6">
    <section class="flex items-center justify-center mt-8 mb-10">
      <TerminofeuLogo class="w-10 mr-2 fill-current text-primary" />
      <h1 class="text-4xl font-bold">Terminofeu</h1>
    </section>

    <section class="mb-12">
      <InstantSearch
        :search-array="entries"
        class="mb-6"
        @searched="displayResults"
        @lookedUp="openEntry"
      />
      <div class="px-8">
        <ul v-if="hasMatches" data-cy="terms-list">
          <li
            v-for="entry in entries"
            :key="entry.key"
            class="flex items-center mb-2 gap-x-2"
          >
            <router-link
              :to="
                localePath({ name: 'entry-id', params: { id: entry.entry_id } })
              "
              class="font-semibold hover:text-primary"
              >{{ entry.term }}
            </router-link>
            <!--    <span
              v-if="entry.status === 'definition'"
              class="px-2 py-1 text-xs font-semibold tracking-wide text-white bg-yellow-700 rounded-full"
              >neue Definition</span
            > -->
          </li>
        </ul>
        <p v-else>{{ $t('noResults') }}</p>
      </div>
    </section>
  </div>
</template>

<script>
import sortOn from 'sort-on'

import TerminofeuLogo from '@/assets/logos/terminofeu.svg'

import { generateTermsList } from '@/utils/utils.js'

export default {
  name: 'Home',
  components: {
    TerminofeuLogo,
  },
  async asyncData({ app: { i18n, $sanity } }) {
    const query = `*[_type == "entry" && status in ["definition", "approved", "validated", "in_force"]] {
      _id,
      status,
      "terms": content.${i18n.locale}.terms[] {
                _key,
                designation,
                abbreviation
        }
    }
    `
    const results = await $sanity.fetch(query)
    const formattedEntries = generateTermsList(results)
    console.log(formattedEntries)
    const entries = sortOn(formattedEntries, 'term')
    return {
      entries,
    }
  },
  data() {
    return {
      hasMatches: true,
    }
  },
  head() {
    return {
      title: this.$t('searchTerm'),
    }
  },
  methods: {
    displayResults(results) {
      this.hasMatches = results.length > 0
      if (this.hasMatches) {
        this.entries = results
      }
    },
    openEntry() {
      const id = this.entries[0]?.entry_id
      if (!id) return
      const path = this.localePath({ name: 'entry-id', params: { id } })
      this.$router.push(path)
    },
  },
}
</script>
