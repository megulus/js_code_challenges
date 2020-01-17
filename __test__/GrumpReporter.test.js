import { GrumpReporter } from '../src/phils_challenges/day5/GrumpReporter'


it('should return correct grump and confidence levels', () => {
  const g1 = new GrumpReporter({ level: 5, time: Date.now() - 90000 })
  expect(g1.grumpLevel()).toStrictEqual({
    'level': 5,
    'confidence': 0.5
  })
  const g2 = new GrumpReporter({ level: 5, time: Date.now() - 121000 })
  expect(g2.grumpLevel()).toStrictEqual({
    'level': 5,
    'confidence': 0.25
  })
  const g3 = new GrumpReporter({ level: 5, time: Date.now() - 1000 })
  expect(g3.grumpLevel()).toStrictEqual({
    'level': 5,
    'confidence': 1
  })
})

it('should create instance with and without object passed to constructor', () => {
  const g1 = new GrumpReporter()
  g1.recordGrump(5)
  expect(g1.grumpLevel().level).toBe(5)
  const g2 = new GrumpReporter({ level: 2 })
  expect(g2.grumpLevel().level).toBe(2)
})

it('should throw an error when recordGrump called with invalid arguments', () => {
  const g1 = new GrumpReporter()
  expect(() => {
    g1.recordGrump('grump!')
  }).toThrowError(/grump level must be a number/)
  expect(() => {
    g1.recordGrump(15)
  }).toThrowError(/grump level must be between 0 and 10/)
  expect(() => {
    g1.recordGrump(-1)
  }).toThrowError(/grump level must be between 0 and 10/)
})
