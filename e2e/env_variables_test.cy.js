describe('test suite2', ()=>{
    // environment variables
    it('env', () => {
        cy.visit('https://bing.com')
        cy.get(Cypress.env('aaa')) // pass this with "npx cypress run --env aaa=value1,bbb=value2"
    })
})
