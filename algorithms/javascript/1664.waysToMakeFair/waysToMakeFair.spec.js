import { waysToMakeFair } from './waysToMakeFair'

describe('waysToMakeFair', function () {
  it('test case 1', function () {
    const nums = [2, 1, 6, 4]
    const result = 1

    expect(waysToMakeFair(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 1, 1]
    const result = 3

    expect(waysToMakeFair(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 2, 3]
    const result = 0

    expect(waysToMakeFair(nums)).toEqual(result)
  })
})
