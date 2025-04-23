describe('template spec', () => {
  it('sign up', () => {
    cy.visit('localhost:3000')

    cy.get('.css-13i4rnv-MuiGrid-root').click()
    cy.get('#firstName').type('Alex')
    cy.get('#lastName').type('Lightwood')
    cy.get('#username').type('Alex')
    cy.get('#password').type('Magnus')
    cy.get('#confirmPassword').type('Magnus')
    cy.get('.MuiButton-colorPrimary').click()

    

  })
  
  it('sign in ok', () => {
    cy.visit('localhost:3000')

    cy.get('#username').type('Alex')
    cy.get('#password').type('Magnus')
    cy.get('.MuiButton-colorPrimary').click()
    

  })

  it('login fail', () => {
    cy.visit('localhost:3000')

    cy.get('#username').type('GeorgeaNLima')
    cy.get('#password').type('Dlchgbltg')
    cy.get('.MuiButton-colorPrimary').click()
    cy.contains('Username or password is invalid').should('be.visible')

  })
})