import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import signUpPage from '../pages/signUpPage'

const loginPage = new LoginPage()
const signupPage = new signUpPage()


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

  it('sign up', () => {
    signupPage.accessSignUpPage()
    signupPage.accessSignUpPage(userData.signUpSuccess.firstname, userData.signUpSuccess.lastname, userData.userSuccess.username, userData.userSuccess.password)     
  })

  

  it('Send money having enough funds ', () =>{
    cy.visit('localhost:3000')
    
    cy.get('#username').type('Luna')
    cy.get('#password').type('Neville')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Lia Rosenbaum')
    cy.contains('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1', 'Lia Rosenbaum').click()
    cy.get('#amount').type(300)
    cy.get('#transaction-create-description-input').type('pay rent')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(1)').click()
       
      
    });
    

  })
  
  it('Send money without enough funds', () =>{
    cy.visit('localhost:3000')

    cy.get('#username').type('Luna')
    cy.get('#password').type('Neville')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Lia Rosenbaum')
    cy.contains('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1', 'Lia Rosenbaum').click()
    cy.get('#amount').type(600)
    cy.get('#transaction-create-description-input').type('pay internet')
    cy.get('[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(1)').click()

  })

  it('Receiving money', () =>{
    cy.visit('localhost:3000')

    cy.get('#username').type('Luna')
    cy.get('#password').type('Neville')
    cy.get('[data-test="signin-submit"]').click()
    cy.get('[data-test="nav-top-new-transaction"]').click()
    cy.get('[data-test="user-list-search-input"]').type('Lia Rosenbaum')
    cy.contains('[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1', 'Lia Rosenbaum').click()
    cy.get('#amount').type(600)
    cy.get('#transaction-create-description-input').type('pay internet')
    cy.get('[data-test="transaction-create-submit-request"]').click()

  })
