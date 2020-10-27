<template>
  <ul>
    <p>{{ blocks }}</p>
    <li v-for="entry in entries" :key="entry._id">
      <router-link :to="`/term/${entry._id}`">{{
        entry.content[$i18n.locale]?.preferredTerm
      }}</router-link>
    </li>
  </ul>
</template>

<script>
const query = /* groq */ `*[_type == "entry"]
{
 _id,
 content {
   de,
   fr
 }
}
`

export default {
  name: 'Home',
  data() {
    return {
      entries: [],
      blocks: [
        {
          _key: '3890b013b023',
          _type: 'block',
          children: [
            {
              _key: '6816ceac1eb4',
              _type: 'span',
              marks: [],
              text:
                'Atriumbauten sind Bauten und Anlagen mit überdachten Innenhöfen, welche mindestens eine der folgenden Bedingungen erfüllen:',
            },
          ],
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '4d9ee2b055a1',
          _type: 'block',
          children: [
            {
              _key: '6fd5b00b8f600',
              _type: 'span',
              marks: [],
              text:
                'die über mehrere Geschosse zusammenhängende Brandabschnittsfläche beträgt mehr als 3‘600 m2;',
            },
          ],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '1d587c756e9d',
          _type: 'block',
          children: [
            {
              _key: 'b665577faed8',
              _type: 'span',
              marks: [],
              text: 'das Atrium dehnt sich über mehr als 3 Geschosse aus;',
            },
          ],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
        {
          _key: '64c831485a45',
          _type: 'block',
          children: [
            {
              _key: 'bb10d19240c20',
              _type: 'span',
              marks: [],
              text: 'die Atriumhöhe beträgt mehr als 11 m.',
            },
          ],
          level: 1,
          listItem: 'bullet',
          markDefs: [],
          style: 'normal',
        },
      ],
    }
  },
  created() {
    this.$sanity
      .fetch(query)
      .then((entries) => (this.entries = entries))
      .catch((err) => console.error('Oh noes: %s', err.message))
  },
}
</script>
