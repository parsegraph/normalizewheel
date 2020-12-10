var assert = require("assert");
import todo from "../dist/normalizewheel";

describe("Package", function () {
  it("works", ()=>{
    assert.equal(todo(), 42);
  });
});
