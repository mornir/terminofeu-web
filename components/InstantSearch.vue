<template>
  <input
    v-debounce:300ms="search"
    type="search"
    class="w-full px-8 py-4 text-xl font-semibold text-white placeholder-gray-600 bg-orange-200 focus:outline-none focus:bg-orange-300"
    placeholder="Begriff suchen"
  />
</template>

<script>
import Fuse from 'fuse.js'

export default {
  props: {
    searchArray: {
      type: Array,
      required: true,
    },
    searchKey: {
      type: String,
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
      keys: [this.searchKey],
      includeScore: true,
    })
    this.localArray = this.searchArray
  },
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
  },
}
</script>
