class CrudPage {
    homePage() {
        cy.visit('/')
        cy.get('h1 .register-title').should('have.text',' Login ')
    }

    fillLogin(logar){
        cy.get('input[name="email"]').type(logar.email)
        cy.get('input[name="password"]').type(logar.password)
    }
}


// class SignupPage {
//     go() {

//         cy.visit('/')
//         cy.get('a[href="/deliver"]').click()
//         cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
//     }

//     fillForm(login) {
//         cy.get('input[name="name"]').type(entregador.nome).screenshot()
//         // cy.get('input[name="name"]').clear()
//         cy.get('input[name="cpf"]').type(entregador.cpf)
//         cy.get('input[name="email"]').type(entregador.email)
//         cy.get('input[name="whatsapp"]').type(entregador.whatsapp)

//         // Preenchendo o endereço
//         cy.get('input[name="postalcode"]').type(entregador.endereco.cep)
//         cy.get('input[type=button][value="Buscar CEP"]').click()
//         cy.get('input[name="address-number"]').type(entregador.endereco.numero)
//         cy.get('input[name="address-details"]').type(entregador.endereco.complemento)

//         cy.get('input[name="address"]').should('have.value', entregador.endereco.rua)
//         cy.get('input[name="city-uf"]').should('have.value', entregador.endereco.cidade_uf)

//         //Marcando Métodos
//         cy.contains('.delivery-method li span', entregador.metodo_entrega.metodo1).click()
//         cy.contains('.delivery-method li span', entregador.metodo_entrega.metodo2).click()
//         cy.contains('.delivery-method li span', entregador.metodo_entrega.metodo3).click()

//         //Desmarcando Métodos
//         cy.contains('.delivery-method li span', entregador.metodo_entrega.metodo1).click()
//         cy.contains('.delivery-method li span', entregador.metodo_entrega.metodo2).click()

//         //upload arquivo       
//         cy.get('input[accept^="image"][type=file]').attachFile('/images/' + entregador.cnh)
//     }