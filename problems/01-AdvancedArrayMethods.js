/**********************************************************************

Using an advanced array method of your choice, write a function called advance
that accepts an array and a callback and returns a new array. This new array
should hold the results of passing each element through the callback.

const arr1 = [1,2,3,4]
const doubler = (ele) => ele * 2
console.log(advance(arr1, doubler)) // [2,4,6,8]

const arr2 = ["Hi", "there", "let's", "use", "strings"]
const angryGoose = (word) => word + " " + "HONK!"
console.log(advance(arr2, angryGoose)) // ["Hi HONK!",
                                           "there HONK!",
                                           "let's HONK!",
                                           "use HONK!",
                                           "strings HONK!"]

 *********************************************************************/

//Your code here
// const advance = (arr, cb) => arr.reduce(function(accum, ele) {

//   accum.push(cb(ele))
//   return accum
// }, [])

// let advance = (arr, cb) => {
//   return arr.map(ele => {
//     return cb(ele)
//   })
// }

// const advance = (arr, cb) => {
//   const newArr = []
//   arr.forEach(ele => {
//     newArr.push(cb(ele))
//   });
//   return newArr;
// }

const advance = (arr, cb) => arr.map(cb)

const arr1 = [1,2,3,4]
const doubler = (num) => num * 2
console.log(advance(arr1, doubler)) // [2,4,6,8]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = advance;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
