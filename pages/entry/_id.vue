<template>
  <div>
    <div v-if="$fetchState.pending">Loading</div>
    <article v-else>
      <h1 v-if="lang.preferredTerm">
        {{ lang.preferredTerm.term }}
      </h1>
      <SanityContent :blocks="lang.definition" />

      <div>
        <h2>Alternative Begriffe</h2>
        <ul v-for="term in lang.terms" :key="term._id">
          <li>{{ term.term }}</li>
        </ul>
      </div>
    </article>
  </div>
</template>

<script>
const query = /* groq */ `*[_type == "entry" && _id == $id][0]{
  "de": {
    "preferredTerm": content.de.preferredTerm->,
    "definition": content.de.definition,
    "terms": content.de.alternativeTerms[]->
  }
}`

export default {
  name: 'Entry',
  async fetch() {
    try {
      this.entry = await this.$sanity.fetch(query, {
        id: this.$route.params.id,
      })
    } catch (err) {
      console.error('Oh noes: %s', err.message)
    }
  },
  data() {
    return {
      entry: {},
    }
  },
  computed: {
    lang() {
      return this.entry[this.$i18n.locale]
    },
  },
}
</script>
