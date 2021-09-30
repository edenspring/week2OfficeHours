/**********************************************************************

Let's explore objects!

We'll store some information about pets in objects. Given an array of
those objects, write a function called fuzzyFinder that returns the total
count of names that include the word "fuzzy"

For example:
const petArray = [
  {
    "name": "Fuzzypants",
   "owner" : "Dave",
   "type" : "cat"
  },
  {
    "name" : "The Lady Fuzzeralla of York",
    "owner" : "Rebecca",
    "type" : "cat"
  },
  {
    "name": "Fuzzywuzzy",
    "owner": "Audrey",
    "type": "dog"
  },
  {
    "name": "More fishy than fuzzy",
    "owner": "Ash",
    "type" : "fish"
  }
]

console.log(fuzzyFinder(petArray)) // 3

!!HINT!!
You may want to use .toLowerCase() or toUpperCase() when testing strings

  *********************************************************************/

//Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = fuzzyFinder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
