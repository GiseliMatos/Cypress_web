describe('Api Adopet', () => {
    //const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ODhmNTNhOS1kYzVmLTRiZjEtOWMxYS0wZGYzYmQ3MzMzOTkiLCJhZG9wdGVyTmFtZSI6ImFuYSBtYXJpYSIsImlhdCI6MTc3NTU5MTE0MCwiZXhwIjoxNzc1ODUwMzQwfQ.ZR538L9frCDw7Vnoo1w4fisyxpx0CSmjH9OYMdYi3Fg`
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1ODhmNTNhOS1kYzVmLTRiZjEtOWMxYS0wZGYzYmQ3MzMzOTkiLCJhZG9wdGVyTmFtZSI6ImFuYSBtYXJpYSIsImlhdCI6MTc3NjAzNTA4MCwiZXhwIjoxNzc2Mjk0MjgwfQ.3giSoKMfyDl9PniKM7xWh0szbtTAjKpsPUfpeSkjxqA`
 it('Mensagens da API', () => {
        cy.request({
         method: 'GET' ,
         url: 'https://adopet-api-i8qu.onrender.com/mensagem/11643cd6-7112-415b-95d2-07904b0d1a1c',
         headers: { authorization }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
        expect(res.body).is.not.empty
        expect(res.body).to.have.property('msg')
        })
 })
})