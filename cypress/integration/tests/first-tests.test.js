/// <reference types="cypress" />

describe('Test Suite', () => {
  it('test one', () => {
    cy.visit('https://answebdev.github.io/BasicPortfolio/');
    cy.contains('About Me').should('exist');
    cy.contains('Portfolio').click();
    cy.log('Checking URL for /portfolio page');
    cy.url().should('include', '/portfolio');
    cy.contains('Contact').click();
  });
});
