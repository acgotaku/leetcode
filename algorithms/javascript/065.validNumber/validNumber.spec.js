import { isNumber } from './validNumber'

describe('isNumber', function () {
  it('isNumber test case 1', function () {
    const s = '0'
    expect(isNumber(s)).toEqual(true)
  })
  it('isNumber test case 2', function () {
    const s = ' 0.1 '
    expect(isNumber(s)).toEqual(true)
  })
  it('isNumber test case 3', function () {
    const s = 'abc'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 4', function () {
    const s = '1 a'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 5', function () {
    const s = '2e10'
    expect(isNumber(s)).toEqual(true)
  })
  it('isNumber test case 6', function () {
    const s = ' -90e3   '
    expect(isNumber(s)).toEqual(true)
  })
  it('isNumber test case 7', function () {
    const s = ' 1e'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 8', function () {
    const s = 'e3'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 9', function () {
    const s = ' 6e-1'
    expect(isNumber(s)).toEqual(true)
  })
  it('isNumber test case 10', function () {
    const s = ' 99e2.5 '
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 11', function () {
    const s = '53.5e93'
    expect(isNumber(s)).toEqual(true)
  })
  it('isNumber test case 12', function () {
    const s = ' --6 '
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 13', function () {
    const s = '-+3'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 14', function () {
    const s = '95a54e53'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 15', function () {
    const s = ''
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 16', function () {
    const s = '.'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 17', function () {
    const s = '4e+'
    expect(isNumber(s)).toEqual(false)
  })
  it('isNumber test case 18', function () {
    const s = ' -.'
    expect(isNumber(s)).toEqual(false)
  })
})
