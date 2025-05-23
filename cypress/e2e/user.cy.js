import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage'
import signUpPage from '../pages/signUpPage'
import TransactionsPage from '../pages/TransactionsPage'

const loginPage = new LoginPage()
const signupPage = new signUpPage()
const transactionsPage = new TransactionsPage()


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
    transactionsPage.accessTransactionPage()
    transactionsPage.sendMoneyWithFunds(userData.userSuccess.username, userData.userSuccess.password)       
  });
    
  })
  
  it('Send money without enough funds', () =>{
    transactionsPage.accessTransactionPage()
    transactionsPage.sendMoneyWithoutFunds(userData.userSuccess.username, userData.userSuccess.password)
  })

  it('Receiving money', () =>{
    transactionsPage.accessTransactionPage()
    transactionsPage.requestMoney(userData.userSuccess.username, userData.userSuccess.password)

  })
