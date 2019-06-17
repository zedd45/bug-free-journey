const flatten = require("./index");

describe("the flatten function", () => {
  it("handles the example provided", () => {
    expect(flatten([[1, 2, [3]], 4])).toEqual([1, 2, 3, 4]);
  });

  it("handles one element as a 2D array", () => {
    expect(flatten([1, 2, [3]])).toEqual([1, 2, 3]);
  });
});
