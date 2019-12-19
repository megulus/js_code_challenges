// Write a function that will return the sum of a given interval in an array
// e.g.:
// array = [0, 1, 0, 0, 1]
// sumInterval(1, 3) => 1
// sumInterval(1, 4) => 2
// use linear extra space


const initialize = (array) => {
  const data = []
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    data[i] = sum += array[i]
  }
  return {
    data: data,
    sumInterval: (num1, num2) => {
      const diff = num1 - 1 >= 0 ? data[num2] - data[num1 - 1] : data[num2]
      return num1 - 1 >= 0 ? data[num2] - data[num1 - 1] : data[num2]
    }
  }
}

const initialized = initialize([0, 1, 0, 0, 1])
console.log('initialized.sumInterval(0, 4) ' + initialized.sumInterval(2, 3))