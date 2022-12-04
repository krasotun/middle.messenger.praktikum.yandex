const assert = require("assert");
const { JSDOM } = require("jsdom");

describe("#Router", () => {
  const { window } = new JSDOM(
    "<!DOCTYPE html><head></head><p>Stub document</p>",
    { url: "http://localhost/" }
  );

  it("Navigation to new page should change History", () => {
    window.history.pushState({ page: "login" }, "Login", "/login");
    window.history.pushState({ page: "register" }, "Register", "/register");
    assert.equal(window.history.length, 3);
  });
});
