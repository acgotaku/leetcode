import { romanToInt } from './romanToInteger'

describe('romanToInt', function () {
  it('romanToInt test case 1', function () {
    const s = 10
    const p = 'X'
    expect(romanToInt(p)).toEqual(s)
  })
  it('romanToInt test case 2', function () {
    const s = 19
    const p = 'XIX'
    expect(romanToInt(p)).toEqual(s)
  })
  it('romanToInt test case 3', function () {
    const s = 1666
    const p = 'MDCLXVI'
    expect(romanToInt(p)).toEqual(s)
  })
  it('romanToInt test case 4', function () {
    const s = 0
    const p = ''
    expect(romanToInt(p)).toEqual(s)
  })
})
