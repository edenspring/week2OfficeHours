/**********************************************************************

Write a function called objectFactory that returns a function. This
function will take in a key and value and return an object that has
the specific key-value pair. Subsequent invocations should add new
pairs to the same object.

const instructorLocations = objectFactory()
instructorLocations("Bill", "Pittsburgh") // {"Bill" : "Pittsburgh"}
instructorLocations("Adam", "LA") // {"Bill" : "Pittsburgh", "Adam" : "LA"}
instructorLocations("Jeff", "Milwaukee") // {"Bill" : "Pittsburgh", "Adam" : "LA", "Jeff" : "Milwaukee"}
instructorLocations("Schuler", "Chicago") // {"Bill" : "Pittsburgh", "Adam" : "LA", "Jeff" : "Milwaukee", "Schuler" : "Chicago"}
instructorLocations("Hector", "Union City") // {"Bill" : "Pittsburgh", "Adam" : "LA", "Jeff" : "Milwaukee", "Schuler" : "Chicago", "Hector" : "Union City"}

 *********************************************************************/

//Your code here


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = objectFactory;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
