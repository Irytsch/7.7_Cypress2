const loginData = require("../fixtures/loginData.json");
const selector = require("../fixtures/selectors");

beforeEach(() => {
  cy.visit("/admin/");
});

it("Should booking a movie in an accessible hall, from admin panel", () => {
  cy.login(loginData.validEmail, loginData.validPass);
  cy.contains("Управление залами").should("be.visible");
  cy.get(selector.sessionGrid).eq(5);
  cy.get(selector.nameHall).click();
  cy.get(selector.openTicketSalesButton).click();
});
