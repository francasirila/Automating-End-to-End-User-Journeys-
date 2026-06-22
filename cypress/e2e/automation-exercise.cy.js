describe('template spec', () => {
  it('passes', () => {
    
    cy.visit('https://automationexercise.com')
    cy.visit('https://automationexercise.com/')
    cy.visit('https://automationexercise.com/login')
    cy.visit('https://automationexercise.com/delete_account')
    cy.visit('https://automationexercise.com/products')
    cy.visit('https://automationexercise.com/products?search=dress')
    cy.visit('https://automationexercise.com/product_details/3')
    cy.visit('https://automationexercise.com/view_cart')
    cy.visit('https://automationexercise.com/login')
    cy.visit('https://automationexercise.com/view_cart')
    cy.visit('https://automationexercise.com/checkout')
    cy.visit('https://automationexercise.com/contact_us')
    
    cy.screenshot();
  })
})