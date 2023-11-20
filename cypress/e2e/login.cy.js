const loginData = require("../fixtures/loginData.json");

beforeEach(() => {
  cy.visit("/admin/");
});

it("Should successfully login", () => {
  cy.login(loginData.validEmail, loginData.validPass);
  cy.contains("Управление залами").should("be.visible");
});

it("Should unsuccessfully login", () => {
  cy.login(loginData.invalidEmail, loginData.invalidPass);
  cy.contains("Ошибка авторизации!").should("be.visible");
});
