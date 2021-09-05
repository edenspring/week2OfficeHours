/**********************************************************************

Given an array of numbers, write a function called mostFrequent that
returns the number that appears the most

const numsArr = [1, 1, 5, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 9, 9, 5, 2, 3, 5, 4, 1];


console.log(mostFrequent(numsArr)) // 5

  *********************************************************************/

//Your code here
// const mostFrequent = (array) => {
//   const countingObject = {}
//   array.forEach((currentNum) => {
//     if (countingObject[currentNum] === undefined){
//       countingObject[currentNum] = 1
//     } else {
//       countingObject[currentNum] += 1
//     }
//   })
//   console.log(countingObject)
//   let currentMax;
//   const keys = Object.keys(countingObject)
//   keys.forEach(function(currentKey){
//     if (countingObject[currentKey] > countingObject[currentMax] || currentMax === undefined){
//       currentMax = currentKey
//     }
//   })
//   return currentMax;
// }

const mostFrequent = (nums) => {
  const countingObject = nums.reduce((accum, currentNumber) => {
    if (accum[currentNumber]) accum[currentNumber]++
    else accum[currentNumber] = 1
    return accum
  }, {})
  console.log(countingObject)
  const keys = Object.keys(countingObject)
  const max = keys.reduce((accum, ele) => {
    if(countingObject[ele] > countingObject[accum]) accum = ele
    return accum
  })
  return max;
}
const numsArr = [1, 1, 5, 1, 2, 3, 4, 5, 5, 6, 5, 7, 8, 9, 9, 5, 2, 3, 5, 4, 1];


console.log(mostFrequent(numsArr)) // 5

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = mostFrequent;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
