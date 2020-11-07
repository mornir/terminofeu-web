function prepareEntry(data) {
  const entry = {
    preferredTerm: {},
    alternativeTerms: [],
    definition: [],
  }
  entry.definition = data.definition

  if (!data.terms?.length > 0) {
    return entry
  }

  entry.preferredTerm = data.terms[0]
  entry.alternativeTerms = data.terms.slice(1)

  return entry
}

export { prepareEntry }
