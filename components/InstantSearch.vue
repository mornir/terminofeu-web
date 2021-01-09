<template>
  <input
    v-debounce:300ms="search"
    type="search"
    class="w-full px-8 py-4 text-xl font-semibold placeholder-black focus:outline-none bg-primary-light"
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
      const results = this.fuse
        .search(query)
        .filter((entry) => entry.score < 0.33)
        .map((entry) => entry.item)

      if (results.length > 0) {
        this.$emit('searched', results)
      } else {
        this.$emit('searched', this.localArray)
      }
    },
  },
}
</script>
