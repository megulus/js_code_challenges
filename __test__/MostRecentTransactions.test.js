import { Transaction, RecentTransactions } from '../src/interview_challenges/MostRecentTransactions'

it('should save a new transaction', () => {
  const t = new Transaction('A', 19.59)
  const mrt = new RecentTransactions(3)
  mrt.save(t)
  expect(mrt.toString()).toBe('A')
  expect(mrt.findById('A').amount).toBe(19.59)
})

it('should remove oldest transaction when capacity exceeded', () => {
  const mrt = new RecentTransactions(3)
  const t1 = new Transaction('A', 19.59)
  const t2 = new Transaction('B', 30.00)
  const t3 = new Transaction('C', 11.99)
  const t4 = new Transaction('D', 54.67)
  mrt.save(t4)
  expect(mrt.toString()).toBe('D')
  mrt.save(t3)
  expect(mrt.toString()).toBe('CD')
  mrt.save(t2)
  expect(mrt.toString()).toBe('BCD')
  mrt.save(t1)
  expect(mrt.toString()).toBe('ABC')
})