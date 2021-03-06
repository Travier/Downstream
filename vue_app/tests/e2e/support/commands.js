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
Cypress.Commands.add("login", () => {
    cy.visit("/login")
    cy.get("input[name=email]").type("test@gmail.com")
    cy.get("input[name=password]").type(`password`)
    cy.get('.loginBtn').click()

    cy.wait(1000)

    cy.saveLocalStorage()
})

Cypress.Commands.add("search", (query) => {
    cy.get("#searchInput").type(query)
    cy.contains("drake").click()
})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
