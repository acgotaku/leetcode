import { maxProduct } from './maximumProductSubarray'

describe('maxProduct', function () {
  it('test case 1', function () {
    const nums = [2, 3, -2, 4]
    const result = 6
    expect(maxProduct(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [-2, 0, -1]
    const result = 0
    expect(maxProduct(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [0, 0, 100]
    const result = 100
    expect(maxProduct(nums)).toEqual(result)
  })
})
