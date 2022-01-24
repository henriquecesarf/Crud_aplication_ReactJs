
describe('home onLine', () =>{
    it('app deve estar online', () =>{
        cy.viewport(1440, 900)
        cy.visit('http://192.168.1.25:3000')
        cy.get('h1.register-title').should('have.text',' Login ')        
    })
})