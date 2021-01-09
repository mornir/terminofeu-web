<template>
  <input
    type="search"
    class="w-full px-8 py-4 text-xl font-semibold placeholder-black focus:outline-none bg-primary-light"
    placeholder="Begriff suchen"
    @input="search"
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
    }
  },
  created() {
    this.fuse = new Fuse(this.searchArray, {
      keys: [this.searchKey],
      includeScore: true,
    })
    // destroy?
  },
  methods: {
    search($event) {
      const results = this.fuse
        .search($event.target.value)
        .filter((entry) => entry.score < 0.33)
        .map((entry) => entry.item)

      this.$emit('searched', results)
    },
  },
}
</script>
