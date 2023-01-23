import {Page1} from "./pages/page1"

var page1 = new Page1()

describe('pages', ()=>{
    it('page',() => {
        page1.openURL('https://google.com')
        page1.clickOnButton()
        page1.insertTextAndClickEnterKey('staf')
//        cy.screenshot()
    })

    it('pageFail',() => {
        page1.openURL('https://google.com')
        page1.clickOnUnexistingButton()
    })
})
