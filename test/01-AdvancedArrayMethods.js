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



  let result1;
  let result2;
  try {
    result = advance(arr1, doubler);
  } catch {
    result = null;
  }
  try {
    result2 = advance(arr2, angryGoose);
  } catch {
    result2 = null;
  }
  it("should call upon an advanced array method", function () {
    const mapSpy = chai.spy.on(Array.prototype, "map");
  const forEachSpy = chai.spy.on(Array.prototype, "forEach");
  const reduceSpy = chai.spy.on(Array.prototype, "reduce");
  const filterSpy = chai.spy.on(Array.prototype, "filter");
    expect(
      (() => {
        if(advance) advance([1], (el)=> el)
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
