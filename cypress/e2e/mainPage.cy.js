const selector = require("../fixtures/selectors");

describe("Movie tickets reservation test", () => {
  it("Should display the main page correctly ", () => {
    cy.visit("/");
    cy.get(selector.weekday).should("have.length", 7);
  });
});
