<template>
  <div>
    <div v-if="$fetchState.pending">Loading</div>
    <article v-else>
      <Heading1 v-if="entry.preferredTerm.term">
        {{ entry.preferredTerm.term }}</Heading1
      >

      <SanityContent v-if="entry.definition" :blocks="entry.definition" />

      <section v-if="entry.preferredTerm.abbreviation" class="mt-8">
        <Heading2>Abkürzung</Heading2>
        <span class="font-bold">{{ entry.preferredTerm.abbreviation }}</span>
      </section>

      <section v-if="entry.alternativeTerms.length > 0" class="mt-8">
        <Heading2>Alternative Begriffe</Heading2>
        <ul>
          <li
            v-for="term in entry.alternativeTerms"
            :key="term._id"
            class="font-semibold"
          >
            {{ term.term }}
          </li>
        </ul>
      </section>

      <section class="mt-8">
        <Heading2>Verwandte Einträge</Heading2>
      </section>
    </article>
  </div>
</template>

<script>
import { prepareEntry } from '@/utils/prepareEntry'

const queryBuilder = (code) => {
  return `*[_type == "entry" && _id == $id][0]{
    "definition": content.${code}.definition,
    "terms": content.${code}.terms[]->,
}`
}

export default {
  name: 'Entry',
  async fetch() {
    try {
      const results = await this.$sanity.fetch(
        queryBuilder(this.$i18n.locale),
        {
          id: this.$route.params.id,
        }
      )

      this.entry = prepareEntry(results)
    } catch (err) {
      console.error('Oh noes: %s', err.message)
    }
  },
  data() {
    return {
      entry: {},
    }
  },
  fetchOnServer: false,
}
</script>
