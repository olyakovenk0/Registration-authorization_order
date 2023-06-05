it('authorization', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type('loogoiinname');
    cy.get('#loginFrm_password').type('password989');
    cy.get('.btn.btn-orange.pull-right').contains('[title]', 'Login').click()

    cy.get('.maintext').should('have.text', ' My Account');
}) 