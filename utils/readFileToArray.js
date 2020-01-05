/* input file of integers, one per line
 * output: array of integers
 */

import fs from 'fs'
import readline from 'readline'


export const arrayFromFile = async (filename) => {
  return new Promise((resolve, reject) => {
    const arr = []

    const instream = fs.createReadStream(filename)
    const rl = readline.createInterface(instream)

    rl.on('line', (line) => {
      const numbers = line.split(' ')
      for (const n of numbers) {
        arr.push(parseInt(n.trim()))
      }
    })
    rl.on('close', () => {
      return resolve(arr)
    })
    rl.on('error', (error) => {
      return reject(error)
    })
  })
}

// let answer
// arrayFromFileHelperWithPromise(process.argv[2]).then(a => { answer = a })
// console.log('answer ' + answer.length)

