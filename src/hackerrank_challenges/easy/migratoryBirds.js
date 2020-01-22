import { arrayFromFile } from '../../../utils/readFileToArray'

// Migratory birds
// Given an array of sightings, determine the species sighted most frequently

function migratoryBirds(arr) {
  let max = 0
  let type = null
  const frequencies = {}
  for (const b of arr) {
    if (!(b in frequencies)) {
      frequencies[b] = 1
    }
    else {
      frequencies[b] += 1
      if (frequencies[b] > max) {
        max = frequencies[b]
        type = b
      }
    }
  }
  for (const key of Object.keys(frequencies)) {
    const val = frequencies[key]
    if (val === max && key < type) type = key
  }
  return type
}

// const test = async () => {
//   const arr = arrayFromFile('/Users/megdahlgren/src/js_code_challenges/__test__/test_helpers/birds04.txt').then(d => {
//     console.log('arr length ' + d.length)
//     console.log('migratoryBirds(arr) ' + migratoryBirds(d))
//   })
// }

// test()
// console.log('migratoryBirds([1, 4, 4, 4, 5, 3]) ' + JSON.stringify(migratoryBirds([1, 4, 4, 4, 5, 3])))
// console.log('migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]) ' + JSON.stringify(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])))