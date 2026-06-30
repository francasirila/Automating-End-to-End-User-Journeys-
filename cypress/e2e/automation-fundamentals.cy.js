describe('Comprehensive Web Element Interactions', () => {

  beforeEach(() => {
    cy.visit('https://testautomationpractice.blogspot.com/');
    
    cy.title().should('include', 'Automation Testing Practice');
  });

  it('should interact with all major form controls and verify states', () => {
    
    cy.get('#name').type('Jane Doe');
    cy.get('#email').type('jane.doe@example.com');
    cy.get('#phone').type('1234567890');
    cy.get('#textarea').type('123 Main Street, Suite 4B');

    cy.get('#name').should('have.value', 'Jane Doe');

    cy.get('#female').check();
    
    cy.get('#female').should('be.checked');
    cy.get('#male').should('not.be.checked');

    cy.get('#monday').check();
    cy.get('#friday').check();
    cy.get('#monday').uncheck();

    cy.get('#friday').should('be.checked');
    cy.get('#monday').should('not.be.checked');

    cy.get('#country').select('Canada');

    cy.get('#country').should('have.value', 'canada');

    cy.get('#singleFileInput').selectFile({
      contents: Cypress.Buffer.from('mock file content'),
      fileName: 'test_report.txt',
      mimeType: 'text/plain'
    });

    cy.get('h2').contains('Footer Links').scrollIntoView();

    cy.get('.submit-btn').click();     
    cy.get('#textarea').should('exist');
  });
});