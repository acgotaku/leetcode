import { trailingZeroes } from './factorialTrailingZeroes'

describe('trailingZeroes', function () {
  it('test case 1', function () {
    const n = 3
    const result = 0

    expect(trailingZeroes(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 5
    const result = 1

    expect(trailingZeroes(n)).toEqual(result)
  })
  it('test case 3', function () {
    const n = 0
    const result = 0

    expect(trailingZeroes(n)).toEqual(result)
  })
  it('test case 4', function () {
    const n = 30
    const result = 7

    expect(trailingZeroes(n)).toEqual(result)
  })
})
