import { fractionToDecimal } from './fractionToRecurringDecimal'

describe('compareVersion', function () {
  it('test case 1', function () {
    const numerator = 1
    const denominator = 2
    const result = '0.5'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 2', function () {
    const numerator = 2
    const denominator = 1
    const result = '2'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 3', function () {
    const numerator = 2
    const denominator = 3
    const result = '0.(6)'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 4', function () {
    const numerator = 4
    const denominator = 333
    const result = '0.(012)'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 5', function () {
    const numerator = 1
    const denominator = 5
    const result = '0.2'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
})
