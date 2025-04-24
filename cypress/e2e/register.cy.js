describe('template spec', () => {
  it('sign up', () => {
    cy.visit('localhost:3000')

    cy.get('.css-13i4rnv-MuiGrid-root').click()
    cy.get('#firstName').type('Alec')
    cy.get('#lastName').type('Lightwood')
    cy.get('#username').type('Alec')
    cy.get('#password').type('Magnus')
    cy.get('#confirmPassword').type('Magnus')
    cy.get('.MuiButton-colorPrimary').click()
    cy.get('#username').type('Alec')
    cy.get('#password').type('Magnus')
    cy.get('.MuiButton-colorPrimary').click()
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('#bankaccount-bankName-input').type('Google Bank')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('987654321')
    cy.get('[data-test="bankaccount-submit"]').click()
    

  })

  it('login fail', () => {
    cy.visit('localhost:3000')

    cy.get('#username').type('GeorgeaNLima')
    cy.get('#password').type('Dlchgbltg')
    cy.get('.MuiButton-colorPrimary').click()
    cy.contains('Username or password is invalid').should('be.visible')

  })

   it('login ok', () => {
    cy.visit('localhost:3000')

    cy.get('#username').type('Tessa')
    cy.get('#password').type('Will')
    cy.get('.MuiButton-colorPrimary').click()
  
  })
  
  
})