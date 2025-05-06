import userData from '../fixtures/userData.json'

describe('template spec', () => {
  
  const selectorsList = {
    firstNameField: '#firstName',
    lastNameField: '#lastName',
    usernameField: '#username',
    passwordField: '#password',
    signInButton: '.MuiButton-colorPrimary'
  }

   
  it.skip('sign up', () => {
    cy.visit('localhost:3000')

    cy.get('.css-13i4rnv-MuiGrid-root').click()
    cy.get(selectorsList.firstNameField).type('Tessa')
    cy.get(selectorsList.lastNameField).type('Grey')
    cy.get(selectorsList.usernameField).type('Tessa')
    cy.get(selectorsList.passwordField).type('Will')
    cy.get('#confirmPassword').type('Will')
    cy.get(selectorsList.signInButton).click()
    cy.get(selectorsList.usernameField).type('Tessa')
    cy.get(selectorsList.passwordField).type('Will')
    cy.get(selectorsList.signInButton).click()
    cy.get('.MuiButton-colorPrimary').click({force:true})
    cy.get('#bankaccount-bankName-input').type('Shadow Bank')
    cy.get('#bankaccount-routingNumber-input').type('234567891')
    cy.get('#bankaccount-accountNumber-input').type('876543219')
    cy.get('[data-test="bankaccount-submit"]').click()
    

  })

  it.skip('login Success', () => {
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get('[data-test="signin-submit"]').click()
  
  })

  it.skip('login Fail', () => {
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.signInButton).click()
    cy.contains('Username or password is invalid').should('be.visible')

  })

  it('Receiving money', () =>{
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root')
    cy.get('[data-test="nav-top-new-transaction"]')
    cy.get('[data-test="user-list-search-input"]').type('Izabelly Lightwood')
    cy.contains('[data-test="user-list-item-i7q-Xc28L"]', 'Izabelly Lightwood').click()
    cy.get('#amount').type('300')
    cy.get('#transaction-create-description-input').type('pay rent')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(1)')
      
    });
    

  })
  
  it.skip('Send money having enough funds', () =>{
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root')
    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root')
    cy.get('#amount').type('300')
    cy.get('#transaction-create-description-input').type('pay rent')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(2)')

  })
