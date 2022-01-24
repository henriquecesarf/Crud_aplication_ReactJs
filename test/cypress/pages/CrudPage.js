class CrudPage {
    homePage() {
        cy.visit('/')
        cy.get('h1.register-title').should('have.text',' Login ')
    }

    fillLogin(logar){
        cy.get('input[name="email"]').type(logar.email)
        cy.get('input[name="password"]').type(logar.password)
        
    }

    submitLogin(){
        //Logar
        cy.get('.app-container-button-login button[type=button]').click()
    }

    validationPageRegister(expectedMessage){
        //Validando se acessou a página de registro        
        cy.get('h1.register-title').should('have.text', expectedMessage)       
    }

    fillRegistro(registro){
        cy.get('input[name="name"]').type(registro.nome)
        cy.get('input[name="email"]').type(registro.email)
        cy.get('input[name="number"]').type(registro.telefone)
    }

    submitRegister(){
        //Confirmar Registro
        cy.get('.register-container button[type="button"]').click()
    }

    editRegister(){
        cy.get('.MuiBox-root-2 > .MuiPaper-root > .MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').should('have.text', 'Editar').click()
        
    }
    cancelEditRegister(){
        cy.get('.MuiDialogActions-root > :nth-child(1)').should('have.text', 'Cancel').click()
        
    }

    validationEditRegister(expectedMessage){
        //Validando se acessou a página de edição do registro        
        cy.get('#form-dialog-title').should('have.text', expectedMessage)       
    }
    
}

export default new CrudPage;

