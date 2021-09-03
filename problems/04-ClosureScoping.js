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

const objectFactory = () => {
  const obj = {}
  return (key, value) => {
    obj[key] = value;
    return obj;
  }
}

const instructorLocations = objectFactory()
console.log(instructorLocations("Bill", "Pittsburgh")) // {"Bill" : "Pittsburgh"}
console.log(instructorLocations("Adam", "LA")) // {"Bill" : "Pittsburgh", "Adam" : "LA"}
console.log(instructorLocations("Jeff", "Milwaukee")) // {"Bill" : "Pittsburgh", "Adam" : "LA", "Jeff" : "Milwaukee"}
console.log(instructorLocations("Schuler", "Chicago")) // {"Bill" : "Pittsburgh", "Adam" : "LA", "Jeff" : "Milwaukee", "Schuler" : "Chicago"}
console.log(instructorLocations("Hector", "Union City")) // {"Bill" : "Pittsburgh", "Adam" : "LA", "Jeff" : "Milwaukee", "Schuler" : "Chicago", "Hector" : "Union City"}
