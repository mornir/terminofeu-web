<template>
  <div class="min-h-screen px-4 pt-6 pb-16 sm:px-8">
    <div v-if="entry && entry.content[$i18n.locale]">
      <header>
        <nuxt-link
          :to="'/' + $i18n.locale"
          class="inline-block mb-6 text-base font-semibold"
        >
          <!--  <svg
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
          </svg> -->
          {{ $t('navigation.backToIndex') }}</nuxt-link
        >

        <nav class="grid grid-cols-2 text-sm">
          <nuxt-link
            v-if="previousEntry"
            :to="
              localePath({
                name: 'entry-id',
                params: { id: previousEntry._id },
              })
            "
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clip-rule="evenodd"
              /></svg
            >{{ previousEntry.title }}</nuxt-link
          >

          <nuxt-link
            v-if="nextEntry"
            class="col-start-2 justify-self-end"
            :to="
              localePath({ name: 'entry-id', params: { id: nextEntry._id } })
            "
            >{{ nextEntry.title
            }}<svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline w-5 h-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              /></svg
          ></nuxt-link>
        </nav>
      </header>
      <section class="mt-8">
        <div class="mb-4 md:mb-6">
          <Heading1 v-if="entry.content[$i18n.locale].terms">
            {{ entry.content[$i18n.locale].terms[0].designation }}
            <span v-if="entry.content[$i18n.locale].terms[0].abbreviation"
              >({{ entry.content[$i18n.locale].terms[0].abbreviation }})</span
            >
          </Heading1>

          <ul>
            <li
              v-for="term in entry.content[$i18n.locale].terms"
              :key="term._key"
              class="text-xl font-semibold lg:text-2xl first:hidden"
            >
              {{ term.designation }}
              <span v-if="term.abbreviation">({{ term.abbreviation }})</span>
            </li>
          </ul>
        </div>

        <div
          class="flex items-center px-2 py-1 mb-3 text-gray-800 bg-orange-300 gap-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="hidden w-6 h-6 md:inline"
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
          <p v-if="$i18n.locale === 'de'" class="text-sm italic lg:text-base">
            <span class="font-semibold">Entwurf Definition</span>: sie ist nocht
            nicht vom Kernauschuss genehmight.
          </p>

          <p
            v-if="!entry.content[$i18n.locale].definition"
            class="text-sm italic lg:text-base"
          >
            La traduction sera publiée sous peu.
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
          class="text-base italic"
        />
      </section>

      <section v-if="entry.content[$i18n.locale].definitions" class="mt-12">
        <Heading2 class="-mb-4">{{
          $t('entry.thirdPartyDefinitions')
        }}</Heading2>

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
    </div>
  </div>
</template>

<script>
import sortOn from 'sort-on'
export default {
  name: 'EntryDetails',
  async asyncData({ params, app: { i18n, $sanity } }) {
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
    },
    "termsList": *[_type == "entry" && status in ["definition", "approved", "validated", "in_force"]] { _id, "title": ${i18n.locale}Title}
  }`

    const { entry, termsList } = await $sanity.fetch(query, {
      id: params.id,
    })

    const sortedTermList = sortOn(termsList, 'title')

    const index = sortedTermList.findIndex((term) => term._id === entry._id)

    const previousEntryIndex = index - 1
    const nextEntryIndex = index + 1

    let previousEntry = null
    let nextEntry = null

    if (index !== -1) {
      if (previousEntryIndex >= 0) {
        previousEntry = sortedTermList[previousEntryIndex]
      }

      if (nextEntryIndex <= sortedTermList.length - 1) {
        nextEntry = sortedTermList[nextEntryIndex]
      }
    }

    return {
      entry,
      previousEntry,
      nextEntry,
    }
  },
  head() {
    return {
      title:
        this.entry.content[this.$i18n.locale]?.terms?.[0].designation ?? '',
      /*   meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description',
        },
      ], */
    }
  },
}
</script>
