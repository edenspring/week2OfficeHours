const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const objectFactory = require("../problems/04-ClosureScoping.js");

describe("objectFactory()", function () {
  let res
  if(objectFactory) res = objectFactory()
  
  it("should return a function when invoked", () => {
    expect(res).to.be.a("function");
  });
  it("when invoked with a key and value argument, the returned function should add those to an object and return that object", function () {
    expect(res("key", "value")).to.eql({ key: "value" });
  });
  it("subsequent invocations with new keys and values should add them to the object rather than creating a new one", function () {
    expect(res("Bill", "Pittsburgh")).to.eql({
      key: "value",
      Bill: "Pittsburgh",
    });
    expect(res("Best Band", "Mastodon")).to.eql({
      key: "value",
      Bill: "Pittsburgh",
      "Best Band": "Mastodon",
    });
    expect(res("Best Game", "Destiny2")).to.eql({
      key: "value",
      Bill: "Pittsburgh",
      "Best Band": "Mastodon",
      "Best Game": "Destiny2",
    });
    expect(res("Best Dark Souls", "Dark Souls 3")).to.eql({
      key: "value",
      Bill: "Pittsburgh",
      "Best Band": "Mastodon",
      "Best Game": "Destiny2",
      "Best Dark Souls": "Dark Souls 3",
    });
  });
});
