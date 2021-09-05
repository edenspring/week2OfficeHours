/***********************************************************************
Welcome to The Article Company! At AC, you have been tasked with a
very important job! Your boss says we need more articles about Spiderman!
But, uh-oh! Some of the writers did not write articles about Spiderman.
You have been given a long string that contains a list of every writer,
and a value that shows if they have written an article about Spiderman.
You must write a function, 'spiderManWriters(string)' and convert its contents
to an object that "ONLY" contains key value pairings of writers who did "NOT"
write about Spiderman.

Assumptions:
You may assume that the order of the key value pairs in the object does NOT matter.

Examples:

str1 = 'Angela T: wrote about Spiderman, Miah B: no Spiderman, Adrian R: wrote about Spiderman'
str2 = 'Tom B: no Spiderman, Justin N: no Spiderman, Emily B: wrote about Spiderman'
***********************************************************************/


// Your code here
const spiderManWriters = (str) => {
  const KVSplit = str.split(", ");
  // console.log(KVSplit)
  const trackerObject = {};
  KVSplit.forEach((ele) => {
    const pair = ele.split(": ");
    // console.log(pair)
    const [key, value] = pair;
    // console.log("key is " + key )
    // console.log("value is " + value)
    if (value.includes("no")) {
      trackerObject[key] = value;
    }
  });
  console.log(trackerObject);
  return trackerObject;
};
