function generateTermsList(entries = []) {
  return entries
    .flatMap((entry) => {
      if (!entry.terms) {
        return []
      }
      return entry.terms.flatMap((term) => {
        const designations = [
          {
            key: 't_' + term._key,
            entry_id: entry._id,
            term: term.designation,
            status: term.status,
          },
        ]
        if (term.abbreviation) {
          designations.push({
            key: 'a_' + term._key,
            entry_id: entry._id,
            term: term.abbreviation,
            status: term.status,
          })
        }
        return designations
      })
    })
    .filter((t) => t.status !== 'avoid' && t.status !== 'to_be_defined')
}

export { generateTermsList }
