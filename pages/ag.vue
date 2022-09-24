<template>
  <div class="p-8">
    <h1 class="text-xl font-semibold">Einträge für die Arbeitsgruppen</h1>

    <ul class="mt-4">
      <li v-for="entry in entries" :key="entry._id">
        <a
          :href="'/de/entry/' + entry._id"
          class="hover:text-primary"
          target="_blank"
          >{{ entry.deTitle }} ({{ entry.assignees.join(', ') }})</a
        >
      </li>
    </ul>
  </div>
</template>

<script>
import sanity from '@/sanity.js'
export default {
  name: 'Arbeitsgruppen',
  async asyncData({ i18n }) {
    const entries = await sanity.fetch`*[_type == "entry" && defined(assignees)] {
                                            _id,
                                            deTitle,
                                            assignees
                                          }`

    return {
      entries,
    }
  },
}
</script>
