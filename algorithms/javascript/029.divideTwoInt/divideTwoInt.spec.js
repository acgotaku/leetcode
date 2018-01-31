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
})
