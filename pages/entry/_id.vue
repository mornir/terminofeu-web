<template>
  <div>
    <nuxt-link to="/" class="-ml-5 text-base font-semibold">
      <ArrowLeft />
      Zum Verzeichnis</nuxt-link
    >
    <div v-if="$fetchState.pending">Loading</div>
    <article v-else class="mt-8">
      <div class="flex">
        <Heading1 v-if="entry.preferredTerm.term">
          {{ entry.preferredTerm.term }}
        </Heading1>
        <ZoomLinkIcon class="mt-1 ml-2" />
      </div>
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

      <section v-if="entry.relatedEntries.length > 0" class="mt-8">
        <Heading2>Verwandte Einträge</Heading2>
        <ul>
          <li
            v-for="fiche in entry.relatedEntries"
            :key="fiche._id"
            class="font-semibold"
          >
            <nuxt-link v-if="fiche.term" :to="`/entry/${fiche._id}/`"
              >{{ fiche.term.term }} <ArrowRight
            /></nuxt-link>
          </li>
        </ul>
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
     relatedEntries[]-> {
      _id,
      "term": content.${code}.terms[0]-> {
        term
      }
    }
}`
}

export default {
  name: 'EntryDetails',
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
}
</script>
