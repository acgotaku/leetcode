import convert from './zigZagConversion'

describe('zigZagConversion', function () {
  it('convert', function () {
    var s = 'PAYPALISHIRING'
    var numRows = '3'
    var result = 'PAHNAPLSIIGYIR'
    expect(convert(s, numRows)).toBe(result)
  })
})
