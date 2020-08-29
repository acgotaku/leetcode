import { minWindow } from './minimumWindowSubstring'

describe('minWindow', function () {
  it('test case 1', function () {
    const s = 'ADOBECODEBANC'
    const t = 'ABC'
    const result = 'BANC'
    expect(minWindow(s, t)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'ECAFHABDXZABCA'
    const t = 'ABCA'
    const result = 'ABCA'
    expect(minWindow(s, t)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'ECAFHABDXZABCA'
    const t = 'ABCAK'
    const result = ''
    expect(minWindow(s, t)).toEqual(result)
  })
})
