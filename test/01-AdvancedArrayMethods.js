const assert = require("assert");
const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const advance = require("../problems/01-AdvancedArrayMethods.js");

describe("advance()", function () {
  const arr1 = [1, 2, 3, 4];
  const doubler = (num) => num * 2;

  const arr2 = ["Hi", "there", "let's", "use", "strings"];
  const angryGoose = (word) => word + " " + "HONK!";

  const mapSpy = chai.spy.on(Array.prototype, "map");
  const forEachSpy = chai.spy.on(Array.prototype, "forEach");
  const reduceSpy = chai.spy.on(Array.prototype, "reduce");
  const filterSpy = chai.spy.on(Array.prototype, "filter");

  let result1 = advance(arr1, doubler);
  let result2 = advance(arr2, angryGoose);
  it("should call upon an advanced array method", function () {
    expect(
      (() => {
        return (
          mapSpy.__spy.called ||
          forEachSpy.__spy.called ||
          reduceSpy.__spy.called ||
          filterSpy.__spy.called
        );
      })()
    ).to.equal(true);
  });

  it("should return a new array containing the results of passing each element of the original array through the callback in order", function () {
    expect(result1).to.eql([2, 4, 6, 8]);
    expect(result2).to.eql([
      "Hi HONK!",
      "there HONK!",
      "let's HONK!",
      "use HONK!",
      "strings HONK!",
    ]);
  });
});
