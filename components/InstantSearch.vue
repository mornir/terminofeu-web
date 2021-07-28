<template>
  <div class="relative focus-within:text-white">
    <label for="search-box" class="absolute right-5 top-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        class="w-6 h-6 stroke-current"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </label>
    <input
      id="search-box"
      v-debounce:300ms="search"
      autofocus
      type="search"
      class="w-full px-8 py-4 text-xl font-semibold placeholder-gray-600 bg-orange-200 focus:text-white focus:outline-none focus:bg-primary-alt focus:placeholder-primary-alt"
      :placeholder="$t('searchTerm')"
      @keyup.enter="lookUp"
    />
  </div>
</template>

<script>
import Fuse from 'fuse.js'

export default {
  props: {
    searchArray: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      fuse: null,
      localArray: [],
    }
  },
  created() {
    this.fuse = new Fuse(this.searchArray, {
      keys: ['term'],
      includeScore: true,
    })
    this.localArray = this.searchArray
  },
  /*   mounted() {
    const searchBox = document.getElementById('search-box')
    searchBox.focus()
  }, */
  methods: {
    search(query) {
      if (!query.trim()) {
        this.$emit('searched', this.localArray)
        return
      }

      const results = this.fuse
        .search(query)
        .filter((entry) => entry.score < 0.33)
        .map((entry) => entry.item)

      this.$emit('searched', results)
    },
    lookUp($event) {
      if ($event.target.value.trim()) {
        this.$emit('lookedUp')
      }
    },
  },
}
</script>

<style scoped>
input::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
</style>
