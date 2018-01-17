import { intToRoman } from './integerToRoman'

describe('intToRoman', function () {
  it('intToRoman test case 1', function () {
    const s = 10
    const p = 'X'
    expect(intToRoman(s)).toEqual(p)
  })
  it('intToRoman test case 2', function () {
    const s = 19
    const p = 'XIX'
    expect(intToRoman(s)).toEqual(p)
  })
})
