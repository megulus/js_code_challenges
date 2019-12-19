// Write a function initialize that, given a list of numeric data points, returns 
// an object containing aggregation functions.For now, the only aggregation function is 
// avg60, which returns a 60 second average for a given time

// aggregations = initialize([
//   { date: new Date("1995-12-17T03:24:20"), value: 4 },
//   { date: new Date("1995-12-17T03:24:00"), value: 3 },
//   { date: new Date("1995-12-17T03:24:40"), value: 17 }
// ])
// aggregations.avg60(new Date("1995-12-17T03:25:00")) => 8
// aggregations.avg60(new Date("1995-12-17T03:24:30")) => 3.5
// aggregations.avg60(new Date("1995-12-17T03:24:00")) => null

const initialize = (arr) => {
  const data = arr.sort((a, b) => a.date - b.date)
  return {
    data: data,
    avg60: (d) => {
      let sum = 0
      let count = 0
      for (const item of data) {
        const diff = d.getTime() - item.date.getTime()
        if (diff > 0 && diff <= 60000) {
          sum += item.value
          count += 1
        }
      }
      return Math.round(((sum * 1.0) / count) * 10) / 10 || null
    }
  }
}

// Write a function findPath that, given a dot - separated path and an object, 
// returns the corresponding key in the object.Assume that no values in your objects are arrays.
// object = { name: { first: "megulus", middle: "evergrump”, last: "dahlgren” }, status: "grumpy" }
// findPath(object, "status") => "grumpy"
// findPath(object, "name.first") => "megulus"
// findPath(object, "name") => { first: "megulus", middle: "evergrump”, last: "dahlgren” }
// findPath(object, "") => { name: { first: "megulus", middle: "evergrump”, last: "dahlgren” }, status: "grumpy" }

const findPath = (object, attrString) => {
  const attrs = attrString.split('.')
  let attr = object
  for (const key of attrs) {
    if (key) attr = attr[key]
  }
  return JSON.stringify(attr)
}

// Generalize your solution to yesterday’s pair - finding problem to support n - tuples. 
// (The order in which tuples are returned doesn’t matter.)
// allTuples([1, 2, 3], 2) => [[1, 2], [1, 3], [2, 3]]
// allTuples([1, 2, 3], 3) => [[1, 2, 3]]
// allTuples([1, 2, 3, 4], 3) => [[1, 2, 3], [1, 3, 4], [1, 2, 4], [2, 3, 4]]

const merge = (thing, arrayOfTuples) => {
  const merged = []
  for (const tuple of arrayOfTuples) {
    merged.push([thing].concat(tuple))
  }
  return merged
}

const allTuples = (arr, size) => {
  let arrayOfTuples = []
  if (arr.length === 0 || size < 1) return arrayOfTuples
  else if (size === 1) {
    for (const each of arr) {
      arrayOfTuples.push([each])
    }
    return arrayOfTuples
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      if (arr.slice(i + 1).length) {
        arrayOfTuples = arrayOfTuples.concat(merge(arr[i], allTuples(arr.slice(i + 1), size - 1)))
      }
    }
    return arrayOfTuples
  }
}

// const aggregations = initialize([{ date: new Date("1995-12-17T03:24:20"), value: 4 }, { date: new Date("1995-12-17T03:24:00"), value: 3 }, { date: new Date("1995-12-17T03:24:40"), value: 17 }])
// console.log('aggregations.avg60(new Date("1995-12-17T03:25:00")): ' + aggregations.avg60(new Date("1995-12-17T03:25:00")))
// console.log('aggregations.avg60(new Date("1995-12-17T03:24:30")): ' + aggregations.avg60(new Date("1995-12-17T03:24:30")))
// console.log('aggregations.avg60(new Date("1995-12-17T03:24:00")): ' + aggregations.avg60(new Date("1995-12-17T03:24:00")))
// const object = { name: { first: "megulus", middle: "evergrump", last: "dahlgren" }, status: "grumpy" }
// console.log('findPath(object, "status"): ' + findPath(object, "status"))
// console.log('findPath(object, "name"): ' + findPath(object, "name"))
// console.log('findPath(object, ""): ' + findPath(object, ""))
console.log('allTuples([1, 2, 3], 2) ' + JSON.stringify(allTuples([1, 2, 3], 2)))
console.log('allTuples([1, 2, 3], 3) ' + JSON.stringify(allTuples([1, 2, 3], 3)))
console.log('allTuples([1, 2, 3, 4], 3): ' + JSON.stringify(allTuples([1, 2, 3, 4], 3)))
console.log('allTuples([1, 2, 3, 4], 2): ' + JSON.stringify(allTuples([1, 2, 3, 4], 2)))