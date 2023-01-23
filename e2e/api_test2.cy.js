// this uses the "cypress-plugin-api" - replace "request" with "api"
// the api response is displayed in Cypress (in the report just for failures)
describe('test suite4', ()=>{
    it('api2', () => {
                cy.api('https://jsonplaceholder.typicode.com/posts/1').then(
                    (response) => {
                        expect(response.status).to.eq(200)
                        expect(response.body).to.have.property('userId')
                        expect(response.body).to.have.property('userId',1)
                        expect(response.body).to.have.property('title','sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
        //                expect(response.body).to.have.length(500)
                })
            })
})
