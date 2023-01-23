export class Page1{

    openURL(url){
      cy.visit(url)
    }

    clickOnButton(){
        cy.get('#W0wltc').click()
    }

    clickOnUnexistingButton(){
            cy.get('#aaa').click()
        }

    insertTextAndClickEnterKey(text){
      cy.get('.gLFyf').type(text).type('{enter}')
      // .type is a "child" command that can only be used after a "parent" command like "get"
      // in other words, you cannot simulate keyboard keys on their own, there needs to be an element
    }

}