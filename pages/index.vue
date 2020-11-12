<template>
  <div class="px-8 py-6">
    <section class="mt-8 mb-12">
      <h1 class="text-3xl font-bold text-center">terminofeu</h1>
      <TerminofeuLogo class="block w-56 mx-auto -mt-4" />
    </section>

    <section class="mb-12">
      <Heading1>
        {{ $t('search') }}
      </Heading1>

      <p class="italic">{{ $t('searchAvailableFrom') }}</p>
    </section>
    <section>
      <Heading1>
        {{ $t('index') }}
      </Heading1>

      <ul>
        <li v-for="record in records" :key="record._id" class="mb-3">
          <router-link
            v-if="record.entry"
            :to="localePath({ name: 'entry-id', params: { id: record.entry } })"
            class="font-semibold hover:text-orange-600"
            >{{ record.term.designation }}
            <span v-if="record.abbreviation"
              >({{ record.abbreviation.designation }})</span
            ><ArrowRight
          /></router-link>
          <span v-else>{{ record.term.designation }}</span>
        </li>
      </ul>
    </section>
    <section class="mt-12">
      <Heading1>terminofeu under the hood</Heading1>

      <div class="grid items-end grid-cols-3 gap-x-8">
        <a href="https://www.sanity.io/" target="_blank">
          <SanityLogo />
        </a>
        <a href="https://nuxtjs.org/" target="_blank">
          <NuxtLogo class="block w-full" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import TerminofeuLogo from '@/assets/logos/arrows.svg'
import SanityLogo from '@/assets/logos/sanity.svg'
import NuxtLogo from '@/assets/logos/nuxt.svg'

const query = /* groq */ `*[_type == 'term' && lang == $lang]|order(term asc)
{
  _id,
  term,
  abbreviation,
  "entry": *[_type=='entry' && references(^._id)][0]._id
}
`

export default {
  name: 'Home',
  components: {
    TerminofeuLogo,
    SanityLogo,
    NuxtLogo,
  },
  data() {
    return {
      records: [],
    }
  },
  created() {
    this.$sanity
      .fetch(query, { lang: this.$i18n.locale })
      .then((records) => (this.records = records))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>
