const entries = [
  {
    _id: '2485c8ef-d766-46d7-9917-6e8aa96c4344',
    terms: [
      {
        abbreviation: 'LRWA',
        designation: 'Entrauchung mit Lüfter der Feuerwehr',
      },
    ],
  },
  {
    _id: '9d61640b-fe7b-4bc5-a843-5fafdf06c7e2',
    terms: [
      {
        abbreviation: 'HFL',
        designation: 'Hand­feu­er­lö­scher',
      },
      {
        designation: 'Feu­er­lö­scher',
      },
      {
        designation: 'Feu­er­lösch­ap­pa­rat',
      },
    ],
  },
  {
    _id: '61e28a88-8e82-4b9b-b446-50ad430c5efa',
    terms: [
      {
        designation: 'Brandschutzanstrich',
      },
    ],
  },
]

function generateTermsList(entries) {
  return entries.flatMap((entry) => {
    return entry.terms.map((term) => {
      return {
        id: entry._id,
        term: term.designation,
      }
    })
  })
}

const results = generateTermsList(entries)

console.log(results)

/*
It returns all the terms of one language
- vedette, alternative, forbidden
- abbreviation

[
  {
    term: 'EFC',
    id: '294u294u2948de9srs9d'
  },
  {
    term: 'matériau de construction',
    id: '25464563343',
  },
  etc.
]
*/

export { generateTermsList }
