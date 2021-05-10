import { combinationSum3 } from './combinationSum.III'

describe('combinationSum3', function () {
  it('test case 1', function () {
    const k = 3
    const n = 9

    const result = [[1, 2, 6], [1, 3, 5], [2, 3, 4]]
    expect(combinationSum3(k, n)).toEqual(result)
  })
  it('test case 2', function () {
    const k = 4
    const n = 1

    const result = []
    expect(combinationSum3(k, n)).toEqual(result)
  })
  it('test case 3', function () {
    const k = 3
    const n = 7

    const result = [[1, 2, 4]]
    expect(combinationSum3(k, n)).toEqual(result)
  })
  it('test case 4', function () {
    const k = 3
    const n = 2

    const result = []
    expect(combinationSum3(k, n)).toEqual(result)
  })
  it('test case 5', function () {
    const k = 9
    const n = 45

    const result = [[1, 2, 3, 4, 5, 6, 7, 8, 9]]
    expect(combinationSum3(k, n)).toEqual(result)
  })
})
