import { fractionToDecimal } from './fractionToRecurringDecimal'

describe('fractionToDecimal', function () {
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
  it('test case 6', function () {
    const numerator = -50
    const denominator = 8
    const result = '-6.25'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 7', function () {
    const numerator = 1
    const denominator = 214748364
    const result = '0.00(000000465661289042462740251655654056577585848337359161441621040707904997124914069194026549138227660723878669455195477065427143370461252966751355553982241280310754777158628319049732085502639731402098131932683780538602845887105337854867197032523144157689601770377165713821223802198558308923834223016478952081795603341592860749337303449725)'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 8', function () {
    const numerator = -2147483648
    const denominator = 1
    const result = '-2147483648'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
  it('test case 8', function () {
    const numerator = 0
    const denominator = -5
    const result = '0'

    expect(fractionToDecimal(numerator, denominator)).toEqual(result)
  })
})
