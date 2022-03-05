/// <reference types="cypress" />

describe('First Test Suite', () => {
  it('Quick Site Test', () => {
    cy.visit('https://answebdev.github.io/BasicPortfolio/');
    cy.log('Checking that there is an About Me header');
    cy.contains('About Me').should('exist');

    cy.contains('Portfolio').click();
    cy.log('Checking URL for Portfolio page');
    cy.url().should('include', '/portfolio');

    cy.contains('Contact').click();
    cy.log('Checking URL for Contact page');
    cy.url().should('include', '/contact');
    cy.log('Checking contact form');
    cy.get('[data-test=name]').type('John Doe');
    cy.get('[data-test=email]').type('johndoe@gmail.com');
    cy.get('[data-test=message]').type('This is a test message.');
  });
});
