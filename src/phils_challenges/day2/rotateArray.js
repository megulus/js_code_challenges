// Write a function rotatefy(array, n) that returns a new array shifted left by n places. 
// rotatefy([1,2,3,4,5], 2) => [3,4,5,1,2]

const rotatefy = (arr, n) => {
  const rotatefied = []
  let rotation = n
  for (let i = 0; i < arr.length; i++) {
    rotatefied[i] = arr[rotation]
    if (rotation < arr.length - 1) rotation += 1
    else rotation = 0
  }
  return rotatefied
}

// console.log('rotatefy([1,2,3,4,5], 2) ' + rotatefy([1, 2, 3, 4, 5], 2))