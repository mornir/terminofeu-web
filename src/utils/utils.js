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
        },
      ]
      if (term.abbreviation) {
        designations.push({
          key: 'a_' + term._key,
          entry_id: entry._id,
          term: term.abbreviation,
        })
      }
      return designations
    })
  })
}

// TODO: Currently unused
function prepareEntry(data) {
  const entry = {
    preferredTerm: {},
    alternativeTerms: [],
    definition: [],
    relatedEntries: [],
  }
  entry.definition = data.definition

  if (!data.terms?.length > 0) {
    return entry
  }

  entry.preferredTerm = data.terms[0]
  entry.alternativeTerms = data.terms.slice(1)

  if (!data.relatedEntries?.length > 0) {
    return entry
  }

  entry.relatedEntries = data.relatedEntries
  return entry
}

export { prepareEntry, generateTermsList }
