/// <reference types="cypress" />

import de from '../../locales/de.json'

context('Search', () => {
  beforeEach(() => {
    cy.visit('/de')
  })
  it('shows no results found', () => {
    cy.get('#search-box').type('asohfaoidf')
    cy.contains(de.noResults)
  })

  it('navigates to first match when pressing enter', () => {
    cy.get('#search-box').type('Brandrisi{enter}', { delay: 500 })
    cy.get('h1').contains('Brandrisiko')
  })

  it('shows all terms after clearing the input field', () => {
    cy.get('#search-box').type('Brandrisi').clear()
    cy.get('[data-cy="terms-list"] li').its('length').should('be.gt', 50)
  })
})
