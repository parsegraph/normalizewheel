const assert = require("assert");
import normalizeWheel from "../dist/normalizewheel";

describe("normalizeWheel", function () {
  it("works", () => {
    const event = {
      deltaX: 0,
      deltaY: 10,
    };

    const normalized = normalizeWheel(event);
    assert.ok(normalized);
  });
});
