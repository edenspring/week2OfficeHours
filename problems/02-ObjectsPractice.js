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
// const fuzzyFinder = (array) =>{
//   return array.reduce((accum, currentObject) => {
//     let lowerName = currentObject.name.toLowerCase()
//     if (lowerName.includes("fuzzy")) {
//       accum += 1
//     }
//     return accum
//   }, 0)
// }

// const fuzzyFinder = function(array){
//   const trackingArray = array.filter(function(currentObject){
//     const lowerName = currentObject.name.toLowerCase()
//     if (lowerName.includes("fuzzy")) return true
//     else return false
//   })
//   return trackingArray.length;
// }

function fuzzyFinder(array) {
  let count = 0;
  array.forEach(currentObject => {
    const upperName = currentObject["name"].toUpperCase()
    if (upperName.includes("FUZZY")) count++
  });
  return count;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = fuzzyFinder;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
