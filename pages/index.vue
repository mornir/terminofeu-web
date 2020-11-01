<template>
  <div>
    <h1 class="text-lg">Alle Begriffe</h1>
    <ul>
      <li v-for="term in terms" :key="term._id">
        <router-link :to="`/entry/${term.entry}`" class="hover:text-primary">{{
          term.term
        }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
const query = /* groq */ `*[_type == "deTerm"]{
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
