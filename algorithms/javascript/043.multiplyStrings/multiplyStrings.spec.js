import { multiply } from './multiplyStrings'

describe('multiply', function () {
  it('multiply test case 1', function () {
    const num1 = '666'
    const num2 = '777'
    const result = '517482'
    expect(multiply(num1, num2)).toEqual(result)
  })
  it('multiply test case 2', function () {
    const num1 = '666'
    const num2 = '0'
    const result = '0'
    expect(multiply(num1, num2)).toEqual(result)
  })
  it('multiply test case 3', function () {
    const num1 = '666'
    const num2 = '7'
    const result = '4662'
    expect(multiply(num1, num2)).toEqual(result)
  })

  it('multiply test case 4', function () {
    const num1 = ''
    const num2 = ''
    const result = ''
    expect(multiply(num1, num2)).toEqual(result)
  })

  it('multiply test case 5', function () {
    const num1 = '1'
    const num2 = '1'
    const result = '1'
    expect(multiply(num1, num2)).toEqual(result)
  })
})
