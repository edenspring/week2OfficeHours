const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const mostFrequent = require("../problems/03-MostFrequentNumber.js");

describe("mostFrequent()", function () {
  const numsArr = [
    1, 1, 5, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 9, 9, 5, 2, 3, 5, 4, 1,
  ];
  const numsArr2 = [2, 2, 2, 2, 4, 5, 6, 7, 8, 9, 1];
  const numsArr3 = [1, 2, 3, 3, 4];

  const res = mostFrequent(numsArr);
  const res2 = mostFrequent(numsArr2);
  const res3 = mostFrequent(numsArr3);
  it("should return a number", ()=>{
    expect(Number(res)).to.not.eql(NaN)
    expect(Number(res)).to.be.an("number")
    expect(Number(res)).to.not.eql(NaN)
    expect(Number(res2)).to.be.an("number")
    expect(Number(res)).to.not.eql(NaN)
    expect(Number(res3)).to.be.an("number")
  })
  it("should return the number that appears more frequently in the given array", function() {
    expect(Number(res)).to.eql(5)
    expect(Number(res2)).to.eql(2)
    expect(Number(res3)).to.eql(3)
  })
});
