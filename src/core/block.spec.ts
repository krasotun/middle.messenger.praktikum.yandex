import { Block } from "./block";
const { JSDOM } = require("jsdom");

const assert = require("assert");

describe("#Block", () => {
  const { window } = new JSDOM(
    "<!DOCTYPE html><head></head><p>Stub document</p>",
    { url: "http://localhost/" }
  );
  const { document } = window;
  global.window = window;
  global.document = document;
  const template = `<h1>Stub</h1>`;
  class BlockStub extends Block {
    render() {
      return this.compile(template);
    }
  }
  const stub = new BlockStub();
  it("render should compile content from  template", () => {
    assert.equal(stub.element.innerHTML, "<h1>Stub</h1>");
  });
});
