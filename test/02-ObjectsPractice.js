const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const fuzzyFinder = require("../problems/02-ObjectsPractice.js");

describe("fuzzyFinder()", function () {
  const pets = [
    { name: "fuzzywuzzy" },
    { name: "fuzzybuzzy" },
    { name: "fuzzyduzzy" },
    { name: "fuzzymuzzy" },
    { name: "fuzzycuzzy" },
    { name: "adam lovett" },
    { name: "jeff granof" },
  ];
  let result;
  let result2;
  try {
    result = fuzzyFinder(pets);
  } catch {
    result = null;
  }
  try {
    result2 = fuzzyFinder([]);
  } catch {
    result2 = null;
  };
  it('should return the number of times the word "fuzzy" appears in all pet names', function () {
    expect(result).to.eql(5);
    expect(result2).to.eql(0);
  });
});
