<template>
  <div>
    <article v-if="term.term">
      <Heading1>{{ term.term }}</Heading1>

      <section v-if="term.sourceTerm">
        <Heading2>Quelle der Benennung</Heading2>
        <p class="text-base">{{ term.sourceTerm }}</p>
      </section>

      <section class="mt-8">
        <Heading2>Anmerkungen</Heading2>
        <SanityContent :blocks="term.notice" />
      </section>
    </article>
    <article v-if="term.abbreviation" class="mt-12">
      <Heading1>{{ term.abbreviation }}</Heading1>
    </article>
  </div>
</template>

<script>
const query = /* groq */ `*[_type == $type && _id == $id][0]`

export default {
  name: 'TermDetails',
  async fetch() {
    try {
      this.term = await this.$sanity.fetch(query, {
        id: this.$route.params.id,
        type: this.$i18n.locale + 'Term',
      })
    } catch (err) {
      console.error('Oh noes: %s', err.message)
    }
  },
  data() {
    return {
      term: {},
    }
  },
}
</script>
