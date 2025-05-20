import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import signUpPage from '../pages/signUpPage'

const loginPage = new LoginPage()
//const signupPage = new signUpPage()

describe('template spec', () => {
  
  it('login Success', () => {
   loginPage.accessLoginPage() 
   loginPage.accessLoginPage(userData.userSuccess.username, userData.userSuccess.password) 
  })

  it('login Fail', () => {
    loginPage.accessLoginPage()
    loginPage.accessLoginPage(userData.userFail.username, userData.userFail.password)
    loginPage.accessLoginPage()
  })

   
  it.skip('sign up', () => {
    signupPage.accessSignUpPage()
    signupPage.accessSignUpPage(userData.signUpSuccess.firstname, userData.signUpSuccess.lastname, userData.userSuccess.username, userData.userSuccess.password)     
  })

  

  it.skip('Receiving money', () =>{
    cy.visit('localhost:3000')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.signInButton).click()
    cy.get('[data-test="sidenav-home"] > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-test="nav-top-new-transaction"]')
    cy.get('#user-list-search-input').type('Lia Rosenbaum')
    cy.contains('[data-test="user-list-item-i7q-Xc28L"]', 'Lia Rosenbaum').click()
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
