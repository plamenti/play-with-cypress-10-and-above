/// <reference types="Cypress" />

describe("Description of the test suite goes here. Test login in zalando-lounge.", () => {
    it("Login with valid credentials.", () =>{
        // Cypress code goes here
        cy.visit("/")
        cy.get("#contact-us").click({force: true})
    });

    it("Login with invalid credentials.", () =>{
        // Cypress code goes here
    });
})