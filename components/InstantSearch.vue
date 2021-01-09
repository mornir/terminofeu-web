<template>
  <ais-instant-search :search-client="searchClient" index-name="media">
    <ais-search-box placeholder="Begriff suchen" />

    <ais-state-results>
      <template slot-scope="{ results: { hits, query } }">
        <ul v-if="hits.length > 0">
          <li v-for="hit in hits" :key="hit.objectID">{{ hit.post_title }}</li>
        </ul>
        <ais-hits v-if="hits.length > 0">
          <ul slot-scope="{ items }">
            <li v-for="item in items" :key="item.objectID">
              {{ item.name }}
            </li>
          </ul>
        </ais-hits>
        <div v-else>No results have been found for {{ query }}.</div>
      </template>
    </ais-state-results>
  </ais-instant-search>
</template>

<script>
import 'instantsearch.css/themes/algolia-min.css'
import {
  AisInstantSearch,
  AisHits,
  AisSearchBox,
  AisStateResults,
} from 'vue-instantsearch'
import algoliasearch from 'algoliasearch/lite'

export default {
  components: {
    AisInstantSearch,
    AisStateResults,
    AisHits,
    AisSearchBox,
  },
  data() {
    return {
      searchClient: algoliasearch(
        '180RG6AZBE',
        '8e16535872dab6df9b55af476d30caed'
      ),
    }
  },
}
</script>

<style></style>
