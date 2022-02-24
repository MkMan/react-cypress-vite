describe(`Demo App`, () => {
  describe(`Counter`, () => {
    const getCountDisplay = () => cy.get('[data-testid="count-display"]');

    beforeEach(() => {
      cy.visit("/");
    });

    it(`should start with count of 0`, () => {
      getCountDisplay().should("contain.text", "Current count is 0");
    });

    it(`should increment the count when the Increment button is clicked`, () => {
      cy.get('[data-testid="increment-btn"]').click();

      getCountDisplay().should("contain.text", "Current count is 1");
    });

    it(`should decrement the count when the Decrement button is clicked`, () => {
      cy.get('[data-testid="decrement-btn"]').click();

      getCountDisplay().should("contain.text", "Current count is -1");
    });
  });

  describe(`Links`, () => {
    it(`should open the React page when the Learn React link is clicked`, () => {
      cy.visit('/');

      cy.contains('a', 'Learn React').click();

      cy.get('h1').should('contain.text', 'React')
    });
  });
});
