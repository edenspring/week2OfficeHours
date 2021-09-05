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
const petArray = [
  {
    "name": "Fuzzypants", //1
   "owner" : "Dave",
   "type" : "cat"
  },
  {
    "name" : "The Lady Fuzzeralla of York",
    "owner" : "Rebecca",
    "type" : "cat"
  },
  {
    "name": "Fuzzywuzzy", //2
    "owner": "Audrey",
    "type": "dog"
  },
  {
    "name": "More fishy than fuzzy", //3
    "owner": "Ash",
    "type" : "fish"
  }
]

// function fuzzyFinder(arr) { //reduce solve
//   return arr.reduce((accum, ele) => {
//     if (ele.name.toLowerCase().includes("fuzzy")) accum++
//     return accum
//   }, 0)
// }

// const fuzzyFinder = (arr) => { //forEach solve
//   let count = 0
//   arr.forEach(ele => {
//     const name = ele.name
//     if (name.toLowerCase().includes("fuzzy")) count++
//   })
//   return count
// }

// const fuzzyFinder = function(arr) { //filter solve
//   return arr.filter(ele => {
//     const name = ele.name.toUpperCase();
//     if (name.includes("FUZZY")) return true
//     else return false;
//   }).length
// }



console.log(fuzzyFinder(petArray)) // 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = fuzzyFinder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
