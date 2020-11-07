<template>
  <div>
    <div v-if="$fetchState.pending">Loading</div>
    <article v-else>
      <Heading1 v-if="entry.terms && entry.terms.length > 0">
        {{ entry.terms[0].term }} (BS)</Heading1
      >
      <SanityContent v-if="entry.definition" :blocks="entry.definition" />

      <!--       <div>
        <h2>Alternative Begriffe</h2>
        <ul v-for="term in lang.terms" :key="term._id">
          <li>{{ term.term }}</li>
        </ul>
      </div> -->
    </article>
  </div>
</template>

<script>
const queryBuilder = (code) => {
  return `*[_type == "entry" && _id == $id][0]{
    "definition": content.${code}.definition,
    "terms": content.${code}.terms[]->
}`
}

export default {
  name: 'Entry',
  async fetch() {
    try {
      this.entry = await this.$sanity.fetch(queryBuilder(this.$i18n.locale), {
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
}
</script>
