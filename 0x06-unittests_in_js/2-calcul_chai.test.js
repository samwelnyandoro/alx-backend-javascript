const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber()", function() {
  it("should return the correct result for the given operation of two rounded digits", function() {
    expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
    expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
  });
});
