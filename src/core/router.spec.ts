const assert = require("assert");
const { JSDOM } = require("jsdom");

describe("Проверяем переходы у Роута", () => {
  const { window } = new JSDOM(
    "<!DOCTYPE html><head></head><p>Stub document</p>",
    { url: "http://localhost/" }
  );

  it("Переход на новую страницу должен менять состояние сущности history", () => {
    window.history.pushState({ page: "login" }, "Login", "/login");
    window.history.pushState({ page: "register" }, "Register", "/register");
    assert.equal(window.history.length, 3);
  });
});
