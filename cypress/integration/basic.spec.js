// https://egghead.io/lessons/cypress-test-a-search-input-in-an-e2e-test-with-cypress

// eslint-disable-next-line spaced-comment
/// <reference types="Cypress" />

describe('Crime Map app', () => {
  beforeEach(() => {
    cy.visit('/');
  })
  it('renders the page initially', () => {
    cy.contains('CRIME MAP');
  });

  it('renders the map', () => {
    cy.get('[data-cy="map"] > .leaflet-container').should('be.visible');
  });

  it('renders the list of crime types', () => {
    cy.get('.each-crime').should('have.length', 15);
  });

  it('renders the list of dates', () => {
    cy.get('#select_minDate > option').should('have.length', 36);
    cy.get('#select_maxDate > option').should('have.length', 36);
  });

  it('allows users search', () => {
    cy.get('[data-cy="searchInput"]').type('E3 2AX');
    cy.get('[data-cy="searchButton"]').click();

    cy.get('[data-cy="map"] svg g path').its('length').should('be.gt', 1);

    cy.get('[data-cy="searchInput"]').clear().type('3029AD');
    cy.get('[data-cy="searchButton"]').click();

    cy.get('[data-cy="map"] svg g path').its('length').should('eq', 0);
  });
});
