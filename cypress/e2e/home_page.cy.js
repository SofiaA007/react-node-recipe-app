
describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('.header').should('be.visible');
    cy.get('.title').should('contain', 'Recipe App')
    cy.get('h1').should('contain', 'Recipe Search')
    cy.get('h1').should('contain', 'Favourites')
    cy.get('input[name=search]')
    cy.get('button[type=submit]')
    cy.get('button').should('contain', 'View More')
    });
})





