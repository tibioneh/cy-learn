describe('test suite5', ()=>{
    it('api1', () => {
                cy.request('https://jsonplaceholder.typicode.com/posts/1').then(
                    (response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.property('userId')
                        expect(response.body).to.have.property('userId',1)
                        expect(response.body).to.have.property('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        //                expect(response.body).to.have.length(500)
                })
            })

// saving data from requests in environment variables (not clear yet):
//    it('env2', () => {
//            cy.request('https://jsonplaceholder.typicode.com/posts/1')
//            .its('body')
//                .as('validationCode')
//            cy.request('@validationCode')
//        })
//
//    it('env3', () => {
//        cy.request('https://jsonplaceholder.typicode.com/posts/1')
//        .then(({ body }) => {
//              Cypress.env('board', body)
//              cy.log(Cypress.env('board'))
//              cy.request('https://' + Cypress.env('board'))
//            })
//    })
//https://filiphric.com/working-with-api-response-data-in-cypress
})
