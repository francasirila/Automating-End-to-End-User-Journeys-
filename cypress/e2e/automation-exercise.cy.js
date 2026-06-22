describe("Test Case 2: Register User", () => {
  beforeEach(() => {
    Cypress.on("uncaught:exception", () => false);
    cy.visit("https://automationexercise.com");
  });

  it("Should successfully register a new user account", () => {
    cy.get(".shop-menu").should("be.visible");

    cy.contains("a", "Signup / Login").click();

    cy.get(".signup-form h2")
      .should("be.visible")
      .and("have.text", "New User Signup!");

    const uniqueEmail = `testuser_${Date.now()}@example.com`;
    cy.get('input[data-qa="signup-name"]').type("QA Automation User");
    cy.get('input[data-qa="signup-email"]').type(uniqueEmail);

    cy.get('button[data-qa="signup-button"]').click();

    cy.get(".login-form h2")
      .first()
      .should("be.visible")
      .and("contain.text", "Enter Account Information");

    cy.get("#id_gender1").check();
    cy.get('input[data-qa="password"]').type("SecurePassword123!");

    cy.get('select[data-qa="days"]').select("15");
    cy.get('select[data-qa="months"]').select("May");
    cy.get('select[data-qa="years"]').select("1995");

    cy.get("#newsletter").check();
    cy.get("#optin").check();

    cy.get('input[data-qa="first_name"]').type("John");
    cy.get('input[data-qa="last_name"]').type("Doe");
    cy.get('input[data-qa="company"]').type("QA Testing Corp");
    cy.get('input[data-qa="address"]').type("123 Main Street, Suite 400");
    cy.get('input[data-qa="address2"]').type("Apartment 2B");
    cy.get('select[data-qa="country"]').select("United States");
    cy.get('input[data-qa="state"]').type("California");
    cy.get('input[data-qa="city"]').type("Los Angeles");
    cy.get('input[data-qa="zipcode"]').type("90001");
    cy.get('input[data-qa="mobile_number"]').type("1234567890");

    cy.get('button[data-qa="create-account"]').click();

    cy.get('h2[data-qa="account-created"]')
      .should("be.visible")
      .and("have.text", "Account Created!");

    cy.get('data-qa="continue-button"').click();

    cy.get(".shop-menu")
      .restore()
      .should("contain.text", "Logged in as QA Automation User");

    cy.contains("a", "Delete Account").click();

    cy.get('h2[data-qa="account-deleted"]')
      .should("be.visible")
      .and("have.text", "Account Deleted!");

    cy.get('data-qa="continue-button"').click();
  });
});
