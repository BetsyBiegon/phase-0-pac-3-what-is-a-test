// indexTest.js

const { name, height, message } = require("../index.js");

describe("Name", () => {
  it('returns "Joe"', () => {
    expect(name).toEqual("Joe");
  });
});

describe("Height", () => {
  it("is equal to 74", () => {
    expect(height).toEqual(74);
  });
});

describe("Message", () => {
  it("gives the name and height", () => {
    expect(message).toContain("Joe");
    expect(message).toContain("74");
  });
});
 