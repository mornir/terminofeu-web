<template>
  <ul>
    <p>{{ $i18n.locale }}</p>
    <li v-for="term in terms" :key="term._id">
      <router-link :to="`/entry/${term.entry}`">{{ term.term }}</router-link>
    </li>
  </ul>
</template>

<script>
const query = /* groq */ `*[_type == "term"]{
  _id,
  term,
  "entry": *[_type=='entry' && references(^._id)][0]._id
}
`

export default {
  name: 'Home',
  data() {
    return {
      terms: [],
    }
  },
  created() {
    this.$sanity
      .fetch(query)
      .then((terms) => (this.terms = terms))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>
