/// <reference types="cypress" />

describe('First Test Suite', () => {
  it('test one', () => {
    cy.visit('https://answebdev.github.io/BasicPortfolio/');
    cy.contains('About Me').should('exist');
    cy.contains('Portfolio').click();
    cy.log('Checking URL for /portfolio page');
    cy.url().should('include', '/portfolio');
    cy.contains('Contact').click();
    cy.get('[data-test=name]').type('ABRACADABRA');
    cy.get('[data-test=email]').type('abracadabra@gmail.com');
    cy.get('[data-test=message]').type(
      'Hello. Would you like to see some ABRACADABRA?'
    );
  });
});
