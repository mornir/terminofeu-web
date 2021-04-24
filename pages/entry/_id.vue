<template>
  <div class="px-8">
    <nuxt-link :to="'/' + $i18n.locale" class="-ml-5 text-base font-semibold">
      <ArrowLeft />
      {{ $t('navigation.backToIndex') }}</nuxt-link
    >

    <article class="mt-8">
      <div class="flex">
        <Heading1>
          {{ entry.content[$i18n.locale].terms[0].designation }}
        </Heading1>
        <!-- <ZoomLink :id="entry._id" class="mt-1 ml-2" /> -->
      </div>

      <RichText
        v-if="entry.content[$i18n.locale].definitions[0].definition"
        :blocks="entry.content[$i18n.locale].definitions[0].definition"
        class="-mt-2"
      />

      <section
        v-if="entry.content[$i18n.locale].terms[0].abbreviation"
        class="mt-8"
      >
        <Heading2>{{ $t('entry.abbreviation') }}</Heading2>
        <span class="font-bold">{{
          entry.content[$i18n.locale].terms[0].abbreviation
        }}</span>
      </section>

      <!--
      <section v-if="entry.alternativeTerms.length > 0" class="mt-8">
        <Heading2>{{ $t('entry.alternativeTerms') }}</Heading2>
        <ul>
          <li
            v-for="alternative in entry.alternativeTerms"
            :key="alternative._id"
            class="font-semibold"
          >
            {{ alternative.term }}
          </li>
        </ul>
      </section> -->

      <!--     <section v-if="entry.relatedEntries.length > 0" class="mt-8">
        <Heading2>{{ $t('entry.relatedTerms') }}</Heading2>
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
      </section> -->
    </article>
  </div>
</template>

<script>
const query = /* groq */ `{ "entry": *[_type == "entry" && _id == $id][0]}`

export default {
  name: 'EntryDetails',
  asyncData({ $sanity, params }) {
    return $sanity.fetch(query, {
      id: params.id,
    })
  },
}
</script>
