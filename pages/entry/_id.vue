<template>
  <div class="px-8 pb-16">
    <nuxt-link :to="'/' + $i18n.locale" class="-ml-5 text-base font-semibold">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="inline-block h-6 stroke-current stroke-2 text-primary"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      {{ $t('navigation.backToIndex') }}</nuxt-link
    >

    <section class="mt-8">
      <div class="flex mb-2">
        <Heading1>
          {{ entry.content[$i18n.locale].terms[0].designation }}
        </Heading1>
        <!-- <ZoomLink :id="entry._id" class="mt-1 ml-2" /> -->
      </div>

      <div class="flex items-center mb-3 gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <p class="text-base italic">
          <span class="font-semibold">Entwurf Definition</span>: sie ist nocht
          nicht vom Kernauschuss genehmight.
        </p>
      </div>

      <RichText
        v-if="entry.content[$i18n.locale].definition"
        :blocks="entry.content[$i18n.locale].definition"
        class="mb-6"
      />

      <RichText
        v-if="entry.content[$i18n.locale].note"
        :blocks="entry.content[$i18n.locale].note"
        class="-mt-2 italic"
      />
    </section>

    <section
      v-if="entry.content[$i18n.locale].terms[0].abbreviation"
      class="mt-8"
    >
      <Heading2>{{ $t('entry.abbreviation') }}</Heading2>
      <span class="font-bold">{{
        entry.content[$i18n.locale].terms[0].abbreviation
      }}</span>
    </section>

    <section class="mt-12">
      <Heading2 class="-mb-4"
        >Definitionen aus bestehenden Regelwerken</Heading2
      >

      <div
        v-for="definition in entry.content[$i18n.locale].definitions"
        :key="definition._key"
        class="mt-6"
      >
        <RichText
          :blocks="definition.definition"
          class="text-base leading-snug"
        />
        <p class="mt-1 text-xs italic">{{ definition.source.title }}</p>
      </div>
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
  </div>
</template>

<script>
export default {
  name: 'EntryDetails',
  asyncData({ params, app: { i18n, $sanity } }) {
    const query = /* groq */ `{ "entry": *[_type == "entry" && _id == $id][0]
    {
      _id,
      content {
      ${i18n.locale} {
        ...,
        definitions[] {
          ...,
          source-> {
            title
          }
        }

      }
     }
    }
  }`

    return $sanity.fetch(query, {
      id: params.id,
    })
  },
}
</script>
