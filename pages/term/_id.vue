<template>
  <div v-if="term">
    <nuxt-link
      v-if="entry"
      :to="`/${$i18n.locale}/entry/${entry}`"
      class="-ml-5 text-base font-semibold"
    >
      <ArrowLeft />
      Zum Eintrag</nuxt-link
    >
    <article v-if="term.designation" class="mt-8">
      <Heading1>{{ term.designation }}</Heading1>

      <div>
        <Heading2>Quelle der Benennung</Heading2>
        <p v-if="term.source" class="text-base">
          {{ term.source }}
        </p>
        <p v-else>Keine Quelle</p>
      </div>

      <div v-if="term.notice" class="mt-8">
        <Heading2>Anmerkungen</Heading2>
        <SanityContent :blocks="term.notice" />
      </div>
    </article>
    <article v-if="term.abbreviation" class="mt-12">
      <Heading1>{{ term.abbreviation }}</Heading1>

      <div v-if="term.sourceAbbreviation" class="mt-8">
        <Heading2>Quelle der Abkürzung</Heading2>
        <p class="text-base">{{ term.source }}</p>
      </div>

      <div v-if="term.notice" class="mt-8">
        <Heading2>Anmerkungen</Heading2>
        <SanityContent :blocks="term.notice" />
      </div>
    </article>
  </div>
</template>

<script>
const query = /* groq */ `*[_type == $type && _id == $id][0] {
  ...,
  "entry": *[references(^._id)][0]._id
}`

export default {
  name: 'TermDetails',
  async fetch() {
    try {
      const { term, entry } = await this.$sanity.fetch(query, {
        id: this.$route.params.id,
        type: this.$i18n.locale + 'Term',
      })
      this.term = term
      this.entry = entry
    } catch (err) {
      console.error('Oh noes: %s', err.message)
    }
  },
  data() {
    return {
      term: {},
      entry: '',
    }
  },
}
</script>
