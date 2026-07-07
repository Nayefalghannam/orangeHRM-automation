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

Cypress.Commands.add('login' , () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // visit orange website
 cy.wait(3000)
 cy.get('[name="username"]').type('admin' , {delay: 200}) // insert username to login
 cy.wait(3000)
 cy.get('[name="password"]').type('admin123' , {delay: 200}) // insert password to login 
 cy.wait(3000)
 cy.get('.oxd-button').click() // click login button
})

Cypress.Commands.add('logout' , () => {
    cy.get('.oxd-userdropdown-tab').click() //click the account
    cy.wait(3000)
    cy.get(':nth-child(4) > .oxd-userdropdown-link').click() // click log out
    cy.wait(4000)
})