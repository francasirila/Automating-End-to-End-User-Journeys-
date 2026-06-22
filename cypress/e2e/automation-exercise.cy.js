describe('Test Case 2: Register User', () => {

  beforeEach(() => {
    // Prevent third-party ad script errors from breaking the test run
    Cypress.on('uncaught:exception', () => false);
    // 1. Navigate to the website homepage
    cy.visit('https://automationexercise.com');
  });

  it('Should successfully register a new user account', () => {
    // 2. Verify homepage is visible
    cy.get('.shop-menu').should('be.visible');

    // 3. Click on the 'Signup / Login' navigation link
    cy.contains('a', 'Signup / Login').click();

    // 4. Verify 'New User Signup!' heading text header is visible
    cy.get('.signup-form h2').should('be.visible').and('have.text', 'New User Signup!');

    // 5. Enter a unique name and email address
    // Tip: Use a dynamic timestamp string to prevent "Email already exists" errors
    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    cy.get('input[data-qa="signup-name"]').type('QA Automation User');
    cy.get('input[data-qa="signup-email"]').type(uniqueEmail);

    // 6. Click the primary 'Signup' submission button
    cy.get('button[data-qa="signup-button"]').click();

    // 7. Verify that the 'ENTER ACCOUNT INFORMATION' setup page text is visible
    cy.get('.login-form h2').first().should('be.visible').and('contain.text', 'Enter Account Information');

    // 8. Fill out Account Information Details: Title, Name, Email, Password, Date of Birth
    cy.get('#id_gender1').check(); // Selects 'Mr.' radio button option
    cy.get('input[data-qa="password"]').type('SecurePassword123!');
    
    // Select date variables from the custom structural dropdown elements
    cy.get('select[data-qa="days"]').select('15');
    cy.get('select[data-qa="months"]').select('May');
    cy.get('select[data-qa="years"]').select('1995');

    // 9. Select the checkbox options for marketing newsletters and special offers
    cy.get('#newsletter').check();
    cy.get('#optin').check();

    // 10. Fill out Address Information Profile Form fields
    cy.get('input[data-qa="first_name"]').type('John');
    cy.get('input[data-qa="last_name"]').type('Doe');
    cy.get('input[data-qa="company"]').type('QA Testing Corp');
    cy.get('input[data-qa="address"]').type('123 Main Street, Suite 400');
    cy.get('input[data-qa="address2"]').type('Apartment 2B');
    cy.get('select[data-qa="country"]').select('United States');
    cy.get('input[data-qa="state"]').type('California');
    cy.get('input[data-qa="city"]').type('Los Angeles');
    cy.get('input[data-qa="zipcode"]').type('90001');
    cy.get('input[data-qa="mobile_number"]').type('1234567890');

    // 11. Click the primary submit button to create the profile account
    cy.get('button[data-qa="create-account"]').click();

    // 12. Verify that 'ACCOUNT CREATED!' banner text is successfully visible
    cy.get('h2[data-qa="account-created"]').should('be.visible').and('have.text', 'Account Created!');

    // 13. Click the 'Continue' workflow redirect button
    cy.get('data-qa="continue-button"').click();

    // 14. Verify that 'Logged in as username' identity text is visible in the top header
    cy.get('.shop-menu').restore().should('contain.text', 'Logged in as QA Automation User');

    // 15. Click the 'Delete Account' link options link
    cy.contains('a', 'Delete Account').click();

    // 16. Verify that 'ACCOUNT DELETED!' success verification banner is visible 
    cy.get('h2[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!');
    
    // Click final continue cleanup button
    cy.get('data-qa="continue-button"').click();
  });

});