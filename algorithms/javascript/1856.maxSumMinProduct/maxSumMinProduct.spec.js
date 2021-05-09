import { maxSumMinProduct } from './maxSumMinProduct'

describe('maxSumMinProduct', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 2]

    const result = 14
    expect(maxSumMinProduct(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [2, 3, 3, 1, 2]

    const result = 18
    expect(maxSumMinProduct(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [3, 1, 5, 6, 4, 2]

    const result = 60
    expect(maxSumMinProduct(nums)).toEqual(result)
  })
})
