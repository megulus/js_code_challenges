// OFFICE HOURS:
// imports and exports, commonJS vs require
// babel: do I still need babel, and if so why? I thought the latest node version had all the ES6 syntax
// exposing my functions to mocha? should I use mocha? is there a more modern framework that I should be using?
// if/when I decide not to use a dependency (e.g., switching from mocha to jest), what are the best practices around cleaning up a package.json, node_modules dir, etc?

export const iterative_fib = (n) => {
  if (n == 0) return 0
  if (n == 1) return 1
  let two_previous = 0
  let one_previous = 1
  let fib_num = 1
  let fib_value = 0
  while (fib_num < n) {
    fib_value = one_previous + two_previous
    two_previous = one_previous
    one_previous = fib_value
    fib_num += 1
  }
  return fib_value
}

export const recursive_fib = (n) => {
  if (n == 0) return 0
  if (n == 1) return 1
  else {
    return recursive_fib(n - 1) + recursive_fib(n - 2)
  }
}

// console.log('iterative: ' + iterative_fib(process.argv[2]))
// console.log('recursive: ' + recursive_fib(process.argv[2]))
