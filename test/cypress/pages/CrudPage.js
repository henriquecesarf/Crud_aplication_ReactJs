class RegisterPage {
    go(){
        // cy.visit('http://localhost:3000')
        // cy.get('h1.register-title').should('have.text','CRUD APPLICATION')
        cy.viewport(1440, 900)
        cy.visit('http://localhost:3000')
        cy.get('h1.register-title').should('have.text','CRUD APPLICATION')
    }
}