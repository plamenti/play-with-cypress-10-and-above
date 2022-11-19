/// <reference types="Cypress" />

describe("Description of the test suite goes here.", () => {
    beforeEach(() => {
        cy.visit("/")
    })

    it("Login with valid credentials.", () => {
        cy.visit("/")
        cy.get("#contact-us")
            .invoke("removeAttr", "target")
            .click({ force: true })
            .then(function (el) {
                console.log(el.text())
            })
        console.log("Outside then")
    });

    it("Switch between different origins.", () => {
        cy.get("#automation-test-store").invoke("attr", "href").then((externalUrl) => {
            cy.origin(externalUrl, () =>{
                cy.visit("/")
            })
        })
        cy.visit("/")
    });

    it("Get url from environment variable.", () => {
        cy.origin(Cypress.env("testUrl"), () => {
            cy.visit("/")
        })
    });
})