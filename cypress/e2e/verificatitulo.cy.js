describe('Página de login', () => {
    it('verifica titulo', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.title().should('eq','AdoPet')
    })
})