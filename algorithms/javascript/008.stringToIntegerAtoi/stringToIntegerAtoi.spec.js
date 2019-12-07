import { myAtoi } from './stringToIntegerAtoi'

describe('myAtoi', function () {
  it('myAtoi test case 1', function () {
    const s = '123'
    expect(myAtoi(s)).toEqual(123)
  })
  it('myAtoi test case 2', function () {
    const s = '-123'
    expect(myAtoi(s)).toEqual(-123)
  })
  it('myAtoi test case 3', function () {
    const s = '+123'
    expect(myAtoi(s)).toEqual(123)
  })
  it('myAtoi test case 4', function () {
    const s = '  123ABC'
    expect(myAtoi(s)).toEqual(123)
  })
  it('myAtoi test case 5', function () {
    const s = '+-2'
    expect(myAtoi(s)).toEqual(0)
  })
  it('myAtoi test case 6', function () {
    const s = '-2147483648'
    expect(myAtoi(s)).toEqual(-2147483648)
  })
  it('myAtoi test case 7', function () {
    const s = '-12345678987654321'
    expect(myAtoi(s)).toEqual(-2147483648)
  })
  it('myAtoi test case 8', function () {
    const s = '12345678987654321'
    expect(myAtoi(s)).toEqual(2147483647)
  })
})
