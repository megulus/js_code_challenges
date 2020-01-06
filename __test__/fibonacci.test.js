import { iterative_fib, recursive_fib } from '../src/ctci_other_challenges/fibonacci'


test('0th fibonacci number should be 0', () => {
  expect(iterative_fib(0)).toBe(0)
  expect(recursive_fib(0)).toBe(0)
})

test('1st fibonacci number should be 1', () => {
  expect(iterative_fib(1)).toBe(1)
  expect(recursive_fib(1)).toBe(1)
})

