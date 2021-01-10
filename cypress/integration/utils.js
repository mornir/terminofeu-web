/// <reference types="cypress" />

import { generateTermsList } from '../../utils/generateTermsList'

// import deTermsList from '../fixtures/deTermsList.json'

context('Utils', () => {
  cy.fixture('deTermsList').then((json) => {
    expect(generateTermsList(json)).to.deep.equal({ foo: 'bar' })
  })
})
