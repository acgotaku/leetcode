import { areAlmostEqual } from './areAlmostEqual'

describe('areAlmostEqual', function () {
  it('test case 1', function () {
    const s1 = 'bank'
    const s2 = 'kanb'

    const result = true
    expect(areAlmostEqual(s1, s2)).toEqual(result)
  })
  it('test case 2', function () {
    const s1 = 'attack'
    const s2 = 'defend'

    const result = false
    expect(areAlmostEqual(s1, s2)).toEqual(result)
  })
  it('test case 3', function () {
    const s1 = 'kelb'
    const s2 = 'kelb'

    const result = true
    expect(areAlmostEqual(s1, s2)).toEqual(result)
  })
  it('test case 4', function () {
    const s1 = 'abcd'
    const s2 = 'dcba'

    const result = false
    expect(areAlmostEqual(s1, s2)).toEqual(result)
  })
  it('test case 5', function () {
    const s1 = 'bankcd'
    const s2 = 'kanbdc'

    const result = false
    expect(areAlmostEqual(s1, s2)).toEqual(result)
  })
  it('test case 6', function () {
    const s1 = 'abc'
    const s2 = 'bbc'

    const result = false
    expect(areAlmostEqual(s1, s2)).toEqual(result)
  })
})
