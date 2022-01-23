import crudpage from '../pages/CrudPage'

describe('home page', () =>{
    beforeEach(function () {
        cy.fixture('register.json').then((d) => {
            this.register = d;
        })

        crudpage.homePage()
    })
    
    it('Logar', function(){
        crudpage.fillLogin(this.register.logar)
    })
})
