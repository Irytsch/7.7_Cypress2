const loginData = require("../fixtures/loginData.json");
const selector = require("../fixtures/selectors");

beforeEach(() => {
  cy.visit("/admin/");
});

it("Should booking a movie in an accessible hall, from admin panel", () => {
  cy.login(loginData.validEmail, loginData.validPass);
  cy.contains("Управление залами").should("be.visible");
  cy.get(selector.sessionGrid).eq(4);
  cy.get(selector.nameHall).click();
  cy.get(selector.openTicketSalesButton).click();
});

it("Should booking a ticket", () => {
  cy.login(loginData.validEmail, loginData.validPass);
  cy.contains("Управление залами").should("be.visible");
  cy.visit("/");
  cy.get('[data-time-stamp="1701810000"]').click();
  cy.get(selector.chooseMovie).click();
  cy.get(selector.movieSeance).contains("11:00").click();
  cy.get(selector.seats).click();
  cy.get(selector.reserve).click({ force: true });
  cy.get(selector.bookingCode).click();
});
