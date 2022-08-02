describe('Login', () => {
    it('Sign in', () => {
        cy .visit('https://react-redux.realworld.io/#/login')
        cy.get('input[type="email"]').type('tilmikutre@tozya.com')
        cy.get('input[type="Password"]').type('tilmikutre@tozya.com')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
    })
})