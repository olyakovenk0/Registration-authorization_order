

  it('Registration', () => {
    cy.visit('https://automationteststore.com/');
    cy.get('#customer_menu_top').click();
    cy.get('.btn.btn-orange.pull-right').contains('Continue').click();
    cy.get('#AccountFrm_firstname').type('firstname');
    cy.get('#AccountFrm_lastname').type('lastname');
    cy.get('#AccountFrm_email').type('email@pen.com');
    cy.get('#AccountFrm_address_1').type('adress1');
    cy.get('#AccountFrm_city').type('city');
    cy.get('#AccountFrm_zone_id').select('Bristol');
    cy.get('#AccountFrm_postcode').type('postcode');
    cy.get('#AccountFrm_country_id').select('Belgium');
    cy.get('#AccountFrm_loginname').type('loogoiinname');
    cy.get('#AccountFrm_password').type('password989');
    cy.get('#AccountFrm_confirm').type('password989');
    cy.get('#AccountFrm_agree').check();
    cy.get('.btn.btn-orange.pull-right.lock-on-click').click();

    cy.get('.maintext').should('have.text', ' Your Account Has Been Created!');

  })
