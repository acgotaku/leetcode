import { minCut } from './palindromePartitioning.II'

describe('minCut', function () {
  it('test case 1', function () {
    const s = 'aab'
    const result = 1
    expect(minCut(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'a'
    const result = 0
    expect(minCut(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'ab'
    const result = 1
    expect(minCut(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = 'abc'
    const result = 2
    expect(minCut(s)).toEqual(result)
  })
})
