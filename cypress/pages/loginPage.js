class LoginPage {
    
    selectorsList() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            signInButton: '.MuiButton-contained',
            wrongCredentialAlert: '.css-1pxa9xg-MuiAlert-message'
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('localhost:3000')
    }

    loginWithUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

   
   }

export default LoginPage