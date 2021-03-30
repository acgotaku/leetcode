import { countPrimes } from './countPrimes'

describe('countPrimes', function () {
  it('test case 1', function () {
    const n = 10
    const result = 4
    expect(countPrimes(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 0
    const result = 0
    expect(countPrimes(n)).toEqual(result)
  })
  it('test case 3', function () {
    const n = 1
    const result = 0
    expect(countPrimes(n)).toEqual(result)
  })
  it('test case 4', function () {
    const n = 2
    const result = 0
    expect(countPrimes(n)).toEqual(result)
  })
})
