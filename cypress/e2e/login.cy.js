import userData from '../fixtures/userData.json'

describe('template spec', () => {
  
  const selectorsList = {
    firstNameField: "#firstName",
    lastNameField: "#lastName",
    usernameField: "#username",
    passwordField: "#password",
    signInButton: ".MuiButton-colorPrimary"
  }

   
  it.skip('sign up', () => {
    cy.visit('localhost:3000')

    cy.get('.css-13i4rnv-MuiGrid-root').click()
    cy.get(selectorsList.firstNameField).type('Alec')
    cy.get(selectorsList.lastNameField).type('Lightwood')
    cy.get(selectorsList.usernameField).type('Alec')
    cy.get(selectorsList.passwordField).type('Magnus')
    cy.get('#confirmPassword').type('Magnus')
    cy.get(selectorsList.signInButton).click()
    cy.get(selectorsList.usernameField).type('Alec')
    cy.get(selectorsList.passwordField).type('Magnus')
    cy.get(selectorsList.signInButton).click()
    cy.get('[data-test="user-onboarding-next"]').click()
    cy.get('#bankaccount-bankName-input').type('Google Bank')
    cy.get('#bankaccount-routingNumber-input').type('123456789')
    cy.get('#bankaccount-accountNumber-input').type('987654321')
    cy.get('[data-test="bankaccount-submit"]').click()
    

  })

  it('login Success', () => {
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.signInButton).click()
  
  })

  it('login Fail', () => {
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.signInButton).click()
    cy.contains('Username or password is invalid').should('be.visible')

  })

  
})