describe('test suite1', { tags: 'suite1' }, ()=>{
    it('bla1', { tags: 'bla1' }, () => {
    	cy.visit('https://google.com')
    	cy.get('asd')
    })
    it('bla2',{ tags: ['bla2', 'test2'] }, () => {
        cy.visit('https://bing.com')
    })
    // use --env grep= for test name
    // use --env grepTags= for tag name(s)
    // npx cypress run --env grep=bla1
    // npx cypress run --env grepTags=test2

    // report can be found at /cypress/reports/html/index.html
})
