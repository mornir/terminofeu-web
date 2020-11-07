<template>
  <div class="px-8 py-6">
    <section class="mt-8 mb-12">
      <h1 class="text-3xl font-bold text-center">terminofeu</h1>
      <svg
        viewBox="0 0 159 16"
        fill="none"
        class="block w-56 mx-auto -mt-4"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538408 7.04738 0.538408 6.65685 0.928933L0.292893 7.29289ZM158.707 8.70712C159.098 8.3166 159.098 7.68343 158.707 7.29291L152.343 0.928945C151.953 0.538421 151.319 0.538421 150.929 0.928945C150.538 1.31947 150.538 1.95263 150.929 2.34316L156.586 8.00001L150.929 13.6569C150.538 14.0474 150.538 14.6806 150.929 15.0711C151.319 15.4616 151.953 15.4616 152.343 15.0711L158.707 8.70712ZM1 9L158 9.00001L158 7.00001L1 7L1 9Z"
          fill="#DD6B20"
        />
      </svg>
    </section>

    <section class="mb-12">
      <Heading1>
        {{ $t('search') }}
      </Heading1>

      <p class="italic">Ab Januar 2021</p>
    </section>
    <section>
      <Heading1>
        {{ $t('index') }}
      </Heading1>

      <ul>
        <li v-for="term in terms" :key="term._id" class="mb-3">
          <router-link :to="`/entry/${term.entry}`" class="hover:text-primary"
            >{{ term.term }} <ArrowIcon
          /></router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
const query = /* groq */ `*[_type == $type]{
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
      .fetch(query, { type: this.$i18n.locale + 'Term' })
      .then((terms) => (this.terms = terms))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>
