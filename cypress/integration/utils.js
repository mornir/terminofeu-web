/// <reference types="cypress" />

import { generateTermsList } from '../../terminofeu-web/src/utils/utils.js'

import deTermsList from '../fixtures/deTermsList.json'
import deTermsFormatted from '../fixtures/deTermsFormatted.json'

context('Utils', () => {
  it('formats the data as expected', () => {
    expect(generateTermsList(deTermsList)).to.deep.equal(deTermsFormatted)
  })
})
