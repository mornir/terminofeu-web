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
          {{ entry.preferredTerm.term.designation }}
        </Heading1>
        <ZoomLink :id="entry.preferredTerm._id" class="mt-1 ml-2" />
      </div>

      <RichText
        v-if="entry.definition"
        :blocks="entry.definition"
        class="-mt-2"
      />

      <section v-if="entry.preferredTerm.abbreviation" class="mt-8">
        <Heading2>Abkürzung</Heading2>
        <span class="font-bold">{{ entry.preferredTerm.abbreviation }}</span>
      </section>

      <section v-if="entry.alternativeTerms.length > 0" class="mt-8">
        <Heading2>Alternative Begriffe</Heading2>
        <ul>
          <li
            v-for="alternative in entry.alternativeTerms"
            :key="alternative._id"
            class="font-semibold"
          >
            {{ alternative.term }}
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
            <nuxt-link v-if="fiche.relatedEntry" :to="`/entry/${fiche._id}/`"
              >{{ fiche.relatedEntry.term.designation }} <ArrowRight
            /></nuxt-link>
          </li>
        </ul>
      </section>
    </article>
  </div>
</template>

<script>
import { prepareEntry } from '@/utils/prepareEntry'

const query = /* groq */ `*[_type == "entry" && _id == $id][0]{
    "de": {
      "definition": content.de.definition,
      "terms": content.de.terms[]->,
      relatedEntries[]-> {
        _id,
        "relatedEntry": content.de.terms[0]-> {
          term
        }
      }
    },
    "fr": {
      "definition": content.fr.definition,
      "terms": content.fr.terms[]->,
      relatedEntries[]-> {
        _id,
        "relatedEntry": content.fr.terms[0]-> {
          term
        }
      }
    },
    "it": {
      "definition": content.it.definition,
      "terms": content.it.terms[]->,
      relatedEntries[]-> {
        _id,
        "relatedEntry": content.it.terms[0]-> {
          term
        }
      }
    }
}`

export default {
  name: 'EntryDetails',
  async fetch() {
    try {
      this.results = await this.$sanity.fetch(query, {
        id: this.$route.params.id,
      })
    } catch (err) {
      console.error('Oh noes: %s', err.message)
    }
  },
  data() {
    return {
      results: {},
    }
  },
  computed: {
    entry() {
      return prepareEntry(this.results[this.$i18n.locale])
    },
  },
}
</script>
