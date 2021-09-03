/**********************************************************************

Using an advanced array method of your choice, write a function called advance
that accepts an array and a callback and returns a new array. This new array
should hold the results of passing each element through the callback.

const arr1 = [1,2,3,4]
const doubler = (num) => num * 2
console.log(advance(arr1, doubler)) // [2,4,6,8]

const arr2 = ["Hi", "there", "let's", "use", "strings"]
const angryGoose = (word) => word + " " + "HONK!"
console.log(advance(arr2, angryGoose)) // ["Hi HONK!",
                                           "there HONK!",
                                           "let's HONK!",
                                           "use HONK!",
                                           "strings HONK!"]

 *********************************************************************/
