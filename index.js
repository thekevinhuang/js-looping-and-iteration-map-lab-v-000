// Code your solution in this file.
function lowerCaseDrivers(collection) {
  let newCollect = collection.map(function(individual) {return individual.toLowerCase()})
  return newCollect
}

function nameToAttributes(collection) {
  let newCollect = collection.map(function(individual) {return Object.assign({}, {firstName: individual.split()[0]}, {lastName:individual.split()[1]})})
}
