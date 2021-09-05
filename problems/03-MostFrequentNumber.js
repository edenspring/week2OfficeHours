/**********************************************************************

Given an array of numbers, write a function called mostFrequent that
returns the number that appears the most

const numsArr = [1, 1, 5, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 9, 9, 5, 2, 3, 5, 4, 1];


console.log(mostFrequent(numsArr)) // 5

  *********************************************************************/

//Your code here
const numsArr = [1, 1, 5, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 9, 9, 5, 2, 3, 5, 4, 1];

// const mostFrequent = (arr) => { //double forEach
//   const numCounter = {}
//   arr.forEach((ele) => {
//     if (numCounter[ele]) numCounter[ele]++
//     else numCounter[ele] = 1;
//   })
//   console.log(numCounter)
//   let currentMax;
//   Object.keys(numCounter).forEach(ele => {
//     if (currentMax === undefined || numCounter[ele] > currentMax) currentMax = ele;
//   })
//   return currentMax;
// }

// function mostFrequent(numbers) { //double reduce
//   const counter = numbers.reduce((accum, ele)=>{
//     if (accum[ele]) accum[ele]++
//     else accum[ele] = 1
//     return accum
//   },{})

//   return Object.keys(counter).reduce((accum, ele)=> {
//     if (counter[ele] > counter[accum]) accum = ele
//     return accum;
//   })
// }

console.log(mostFrequent(numsArr)) // 5

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = mostFrequent;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
