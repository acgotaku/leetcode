import { convert } from './zigZagConversion'

describe('zigZagConversion', function () {
  it('convert', function () {
    const s = 'PAYPALISHIRING'
    const numRows = '3'
    const result = 'PAHNAPLSIIGYIR'
    expect(convert(s, numRows)).toBe(result)
  })
})
