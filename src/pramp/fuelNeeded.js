/*
gain 1 kWh for every 1 unit descent
lose 1 kWh for ever 1 unit gained
fuel cannot go below zero - how much fuel needed to complete route?

fuelNedded([
  [0, 2, 10],
  [3, 5, 0],
  [9, 20, 6],
  [10, 12, 15],
  [10, 10, 8]
])  => 5

*/

const fuelNeeded = (route) => {
  let currentElevation = route[0][2]
  let currentFuel = 0
  let fuelNeeded = 0

  for (let i = 0; i < route.length; i++) {
    const newElevation = route[i][2]
    const elevationDiff = -(newElevation - currentElevation)
    currentFuel += elevationDiff
    if (currentFuel < 0) fuelNeeded += -currentFuel
    currentElevation = newElevation
  }
  return fuelNeeded
}

console.log('fuelNeeded([[0, 2, 10], [3, 5, 0], [9, 20, 6], [10, 12, 15], [10, 10, 8]]): ' + fuelNeeded([[0, 2, 10], [3, 5, 0], [9, 20, 6], [10, 12, 15], [10, 10, 8]]))
console.log('fuelNeeded([0, 2, 10], [3, 5, 9], [9, 20, 6], [10, 12, 2], [10, 10, 10], [10, 10, 2]]): ' + fuelNeeded([[0, 2, 10], [3, 5, 9], [9, 20, 6], [10, 12, 2], [10, 10, 10], [10, 10, 2]]))
console.log('fuelNeeded([[0, 2, 6], [10, 10, 20]]): ' + fuelNeeded([[0, 2, 6], [10, 10, 20]]))
