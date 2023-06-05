
it('Make an order', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type('loogoiinname');
    cy.get('#loginFrm_password').type('password989');
    cy.get('.btn.btn-orange.pull-right').contains('[title]', 'Login').click();

    cy.get('.maintext').should('have.text', ' My Account');

    cy.get('#filter_keyword').type('shampoo{enter}');
    cy.get('.pricetag.jumbotron').children('[data-id="70"]').click();
    cy.get('#main_menu_top').children('[data-id="menu_cart"]').click();
    cy.get('[href="https://automationteststore.com/index.php?rt=product/product&product_id=70&key=70"]').should('have.text', 'Eau Parfumee au The Vert Shampoo');
    cy.get('#cart_checkout2').click();
    cy.get('#checkout_btn').click();
    cy.get('.maintext').should('have.text', ' Your Order Has Been Processed!');
})