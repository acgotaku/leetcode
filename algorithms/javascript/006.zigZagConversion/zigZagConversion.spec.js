import { convert } from './zigZagConversion'

describe('zigZagConversion', function () {
  it('convert test case 1', function () {
    const s = 'PAYPALISHIRING'
    const numRows = 3
    const result = 'PAHNAPLSIIGYIR'
    expect(convert(s, numRows)).toBe(result)
  })
  it('convert test case 2', function () {
    const s = 'HELLO'
    const numRows = 1
    const result = 'HELLO'
    expect(convert(s, numRows)).toBe(result)
  })
})
