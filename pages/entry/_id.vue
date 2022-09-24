<template>
  <div class="min-h-screen px-4 pt-6 pb-16 sm:px-8">
    <div v-if="entry && entry.content[$i18n.locale]">
      <header>
        <NuxtLink
          :to="'/' + $i18n.locale"
          class="inline-block mb-6 text-base font-semibold underline"
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
          {{ $t('navigation.backToIndex') }}</NuxtLink
        >

        <nav class="grid grid-cols-2 text-xs sm:text-sm">
          <NuxtLink
            v-if="previousEntry"
            class="underline justify-self-start"
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
            >{{ previousEntry.title }}</NuxtLink
          >

          <NuxtLink
            v-if="nextEntry"
            class="col-start-2 underline justify-self-end"
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
          ></NuxtLink>
        </nav>
      </header>

      <section class="mt-8">
        <div class="mb-4 md:mb-6">
          <div class="flex items-baseline gap-x-2">
            <h1
              v-if="entry.content[$i18n.locale].terms"
              class="relative text-2xl font-bold leading-normal sm:pl-2 sm:-ml-4 sm:border-l-8 sm:border-primary lg:text-3xl"
            >
              {{ entry.content[$i18n.locale].terms[0].designation }}
              <span v-if="entry.content[$i18n.locale].terms[0].abbreviation"
                >({{ entry.content[$i18n.locale].terms[0].abbreviation }})</span
              >
            </h1>
            <SourceIcon
              v-if="
                entry.content[$i18n.locale].terms[0].source &&
                entry.content[$i18n.locale].terms[0].source.title
              "
              :title="entry.content[$i18n.locale].terms[0].source.title"
              :long-title="
                entry.content[$i18n.locale].terms[0].source.longTitle
              "
              :date="entry.content[$i18n.locale].terms[0].source.date"
              :url="entry.content[$i18n.locale].terms[0].source.url"
            />
          </div>

          <ul>
            <li
              v-for="term in entry.content[$i18n.locale].terms"
              :key="term._key"
              class="text-xl font-semibold lg:text-2xl first:hidden"
            >
              {{ term.designation }}
              <span v-if="term.abbreviation">({{ term.abbreviation }})</span>
              <SourceIcon
                v-if="term.source && term.source.title"
                :title="term.source.title"
                :long-title="term.source.longTitle"
                :date="term.source.date"
                :url="term.source.url"
                class="inline-block text-base"
              />
            </li>
          </ul>
        </div>

        <div
          class="flex items-center px-4 py-1 mb-3 text-gray-800 bg-orange-300"
          style="width: fit-content"
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
          <p
            v-if="entry.content[$i18n.locale].definition"
            class="text-sm font-semibold lg:text-base"
          >
            {{ $t('entry.draftDefinition') }}
          </p>

          <p v-else class="text-sm font-semibold lg:text-base">
            La traduction sera publiée sous peu.
          </p>
        </div>

        <div class="mb-6">
          <BlockContent
            v-if="entry.content[$i18n.locale].definition"
            :blocks="entry.content[$i18n.locale].definition"
          />

          <SourceText
            v-if="
              entry.content[$i18n.locale].definitionSource &&
              entry.content[$i18n.locale].definitionSource.reference &&
              entry.content[$i18n.locale].definitionSource.reference.title
            "
            :title="
              entry.content[$i18n.locale].definitionSource.reference.title
            "
            :after="
              entry.content[$i18n.locale].definitionSource.type &&
              entry.content[$i18n.locale].definitionSource.type === 'after'
            "
            :url="entry.content[$i18n.locale].definitionSource.reference.url"
            :date="entry.content[$i18n.locale].definitionSource.reference.date"
            :long-title="
              entry.content[$i18n.locale].definitionSource.reference.longTitle
            "
          />
        </div>

        <div>
          <div class="text-base italic">
            <BlockContent
              v-if="entry.content[$i18n.locale].note"
              :blocks="entry.content[$i18n.locale].note"
            />
          </div>
          <SourceText
            v-if="
              entry.content[$i18n.locale].notesSource &&
              entry.content[$i18n.locale].notesSource.reference &&
              entry.content[$i18n.locale].notesSource.reference.title
            "
            :title="entry.content[$i18n.locale].notesSource.reference.title"
            :after="
              entry.content[$i18n.locale].notesSource.type &&
              entry.content[$i18n.locale].notesSource.type === 'after'
            "
            :url="entry.content[$i18n.locale].notesSource.reference.url"
            :date="entry.content[$i18n.locale].notesSource.reference.date"
            :long-title="
              entry.content[$i18n.locale].notesSource.reference.longTitle
            "
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import 'floating-vue/dist/style.css'
import sortOn from 'sort-on'
import BlockContent from 'sanity-blocks-vue-component'
import sanity from '@/sanity.js'

export default {
  name: 'EntryDetails',
  components: {
    BlockContent,
  },
  async asyncData({ params, i18n }) {
    const query = /* groq */ `{ "entry": *[_type == "entry" && _id == $id][0]
    {
      _id,
      content {
      ${i18n.locale} {
        ...,
        terms[] {
          ...,
          source->
        },
        definitionSource {
          reference->{title, longTitle, date, url},
          type
        },
        notesSource {
          reference->{title, longTitle, date, url},
          type
        }
      }
     }
    },
    "termsList": *[_type == "entry" && status in ["approved", "validated", "in_force"]] { _id, "title": ${i18n.locale}Title}
  }`

    const { entry, termsList } = await sanity.fetch(query, {
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
    }
  },
}
</script>
