// Write a function findPath that, given a dot - separated path and an object, 
// returns the corresponding key in the object. Assume that no values in your objects are arrays.
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
  return attr
}

// const object = { name: { first: "megulus", middle: "evergrump", last: "dahlgren" }, status: "grumpy" }
// console.log('findPath(object, "status"): ' + JSON.stringify(findPath(object, "status")))
// console.log('findPath(object, "name"): ' + JSON.stringify(findPath(object, "name")))
// console.log('findPath(object, ""): ' + JSON.stringify(findPath(object, "")))