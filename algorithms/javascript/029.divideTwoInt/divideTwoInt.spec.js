import { divide } from './divideTwoInt'

describe('divide', function () {
  it('divide test case 1', function () {
    const dividend = 100
    const divisor = 1
    expect(divide(dividend, divisor)).toEqual(100)
  })

  it('divide test case 2', function () {
    const dividend = 0
    const divisor = 1
    expect(divide(dividend, divisor)).toEqual(0)
  })
  it('divide test case 3', function () {
    const dividend = 10
    const divisor = -2
    expect(divide(dividend, divisor)).toEqual(-5)
  })
  it('divide test case 4', function () {
    const dividend = -10
    const divisor = 2
    expect(divide(dividend, divisor)).toEqual(-5)
  })
  it('divide test case 5', function () {
    const dividend = 1099511627776
    const divisor = 2
    expect(divide(dividend, divisor)).toEqual(2147483647)
  })
  it('divide test case 6', function () {
    const dividend = 1099511627776
    const divisor = -2
    expect(divide(dividend, divisor)).toEqual(-2147483648)
  })
})
