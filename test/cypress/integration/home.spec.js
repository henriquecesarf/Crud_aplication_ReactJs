
describe('home page', () =>{
    it('app deve estar online', () =>{
        cy.viewport(1440, 900)
        cy.visit('http://localhost:3000')
        cy.get('h1.register-title').should('have.text','CRUD APPLICATION')     
    })
})
