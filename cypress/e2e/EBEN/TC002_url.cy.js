describe('Ceate a post, mark then unmark it as favorite', () => {

    it('Sign in', () => {
        cy .visit('https://react-redux.realworld.io/#/login')
        cy.title().should('eq', 'Conduit')
        cy.location('protocol', {timeout:10000}).should('eq', 'https:')
        cy.get('input[type="email"]').type('tilmikutre@tozya.com')
        cy.get('input[type="Password"]').type('tilmikutre@tozya.com')
        cy.get('.btn').contains('Sign in').should('be.visible').click()
        cy.contains('Fork on GitHub', ).should('be.visible')
    })

    it('Create a post', () => {
        cy.contains('New Post').click()
        cy.hash().should('include', '#/editor')
        //cy.location('protocol').should('eq', 'https:')     The 2 are the same
        cy.get('input[placeholder="Article Title"]').first().type('Test')
        cy.get('input[placeholder="What\'s this article about?"]').type('Test1')
        cy.get('textarea[placeholder="Write your article (in markdown)"]').last().type('Test2')
        cy.contains('Publish Article').click()
        cy.url().should('include', 'article')
})
it('mark then unmark as favorite', () => {
    cy.get('.nav-link', {timeout:10000}).contains('tilmikutre@tozya.com').click()
    cy.contains('My Articles').should('be.visible')
    cy.get('.ion-heart').click()
    cy.reload()
    cy.contains('Favorited Articles').click()
    cy.url().should('include', 'favorites')
    cy.get('.ion-heart', {timeout:10000}).click()
    cy.contains('No articles are here... yet.').should('be.visible')
    cy.go('-1')
    //cy.go('back')   same as directly above
    //cy.go('forward')
    //cy.go('1')
})
})