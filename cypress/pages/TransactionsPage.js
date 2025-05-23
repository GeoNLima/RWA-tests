class TransactionsPage {
    
    selectorsList2() {
        const selectors = {
            usernameField: '#username',
            passwordField: '#password',
            signInButton: '.MuiButton-contained',
            newTransationButton: '.MuiButton-colorInherit',
            searchField: '[data-test="user-list-search-input"]',
            selectButton:'[data-test="user-list-item-WHjJ4qR2R2"] > .MuiListItemText-root > .MuiTypography-body1',
            amountField: '#amount',
            descriptionField: '#transaction-create-description-input',
            paymentButton: '[data-test="transaction-create-form"] > .MuiGrid-container > :nth-child(1)',
            requestButton: '[data-test="transaction-create-submit-request"]'
        }

            return selectors
    }    
    
    accessTransactionPage() {
        cy.visit('localhost:3000')
    }

    sendMoneyWithFunds(username, password) {
        cy.get(this.selectorsList2().usernameField).type(username)
        cy.get(this.selectorsList2().passwordField).type(password)
        cy.get(this.selectorsList2().signInButton).click()
        cy.get(this.selectorsList2().newTransationButton).click()
        cy.get(this.selectorsList2().searchField).type('Lia Rosenbaum')
        cy.contains(this.selectorsList2().selectButton, 'Lia Rosenbaum').click()
        cy.get(this.selectorsList2().amountField).type(300)
        cy.get(this.selectorsList2().descriptionField).type('pay rent')
        cy.get(this.selectorsList2().paymentButton).click()
    }

    sendMoneyWithoutFunds(username, password) {
        cy.get(this.selectorsList2().usernameField).type(username)
        cy.get(this.selectorsList2().passwordField).type(password)
        cy.get(this.selectorsList2().signInButton).click()
        cy.get(this.selectorsList2().newTransationButton).click()
        cy.get(this.selectorsList2().searchField).type('Lia Rosenbaum')
        cy.contains(this.selectorsList2().selectButton, 'Lia Rosenbaum').click()
        cy.get(this.selectorsList2().amountField).type(600)
        cy.get(this.selectorsList2().descriptionField).type('pay internet')
        cy.get(this.selectorsList2().paymentButton).click()
    }

    requestMoney(username, password) {
        cy.get(this.selectorsList2().usernameField).type(username)
        cy.get(this.selectorsList2().passwordField).type(password)
        cy.get(this.selectorsList2().signInButton).click()
        cy.get(this.selectorsList2().newTransationButton).click()
        cy.get(this.selectorsList2().searchField).type('Lia Rosenbaum')
        cy.contains(this.selectorsList2().selectButton, 'Lia Rosenbaum').click()
        cy.get(this.selectorsList2().amountField).type(600)
        cy.get(this.selectorsList2().descriptionField).type('receive money')
        cy.get(this.selectorsList2().requestButton).click()
    }
}

export default TransactionsPage