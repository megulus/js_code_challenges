import { iterative_fib } from '../src/fibonacci'


test('0th fibonacci number should be 0', () => {
  expect(iterative_fib(0)).toMatch(0)
})

