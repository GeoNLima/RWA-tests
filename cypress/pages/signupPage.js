class signUpPage {

    selectorsList() {
        const selectors = {
            firstNameField: '#firstName',
            lastNameField: '#lastName',
            signupButton: '.css-13i4rnv-MuiGrid-root',
            confirmpasswordField: '#confirmPassword',
            usernameField: '#username',
            passwordField: '#password',
            signInButton: '.MuiButton-contained'
        }
        
        return selectors
    }

    accessSignUpPage() {
        cy.visit('localhost:3000')
    }

    signUpSuccessfully(firstname, lastname, username, password){
        cy.get(this.selectorsList().signupButton).click()
        cy.get(this.selectorsList().firstNameField).type(firstname)
        cy.get(this.selectorsList().lastNameField).type(lastname)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmpasswordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
        
    //cy.get('#bankaccount-bankName-input').type('Gringotes')
    //cy.get('#bankaccount-routingNumber-input').type('234567891')
    //cy.get('#bankaccount-accountNumber-input').type('876543219')
    //cy.get('[data-test="bankaccount-submit"]').click()

    }
}

export default signUpPage