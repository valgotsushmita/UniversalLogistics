// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import login from "../pageobjects/pages/loginPage.cy"

Cypress.Commands.add('clickLink', (label) => {
    cy.get('a').contains(label).click();
})

Cypress.Commands.add('ClickonmenuOptions', (name) => {
    cy.get('[data-cy="Menu_Button"]',{timeout:5000}).click({force:true});
    cy.contains(name).click();
})

Cypress.Commands.add('Filters',()=>{
    cy.get('span').contains(' Filters ');
})

Cypress.Commands.add('Searchbutton',()=>{
    cy.get('span').contains('Search');
})

Cypress.Commands.add('PredefinedFilters',()=>{
    cy.get('span').contains('Predefined Filters');
})

Cypress.Commands.add('LoginFunctionality',()=>{
    login.enterURL();
    cy.fixture('Logincredentials').then((data) =>{
        login.enterUserNamePassword(data.username, data.password);
       })
    
    login.clickSubmitButton();
    cy.wait(5000);
})

Cypress.Commands.add('Clickaction', (name) => {
    cy.get(name).click({force:true});
    
})


