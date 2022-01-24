import crudpage from '../pages/CrudPage'

describe('home page', () =>{

    beforeEach(function() {
        cy.fixture('register.json').then((d) => {
            this.register = d;
        })

        crudpage.homePage()
    })
    
    it('Registro', function(){
        crudpage.fillLogin(this.register.logar)
        crudpage.submitLogin()
        crudpage.validationPageRegister(' CRUD APPLICATION ')
        crudpage.fillRegistro(this.register.registro)
        crudpage.submitRegister()
        // crudpage.validationPageRegister(' CRUD APPLICATION ')
    })
})
