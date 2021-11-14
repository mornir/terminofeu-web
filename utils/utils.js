function generateTermsList(entries = []) {
  return entries.flatMap((entry) => {
    if (!entry.terms) {
      return []
    }
    return entry.terms.flatMap((term) => {
      const designations = [
        {
          key: 't_' + term._key,
          entry_id: entry._id,
          term: term.designation,
          status: entry.status,
        },
      ]
      if (term.abbreviation) {
        designations.push({
          key: 'a_' + term._key,
          entry_id: entry._id,
          term: term.abbreviation,
          status: entry.status,
        })
      }
      return designations
    })
  })
}

export { generateTermsList }
