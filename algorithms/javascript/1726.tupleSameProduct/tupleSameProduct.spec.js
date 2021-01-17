import { tupleSameProduct } from './tupleSameProduct'

describe('tupleSameProduct', function () {
  it('test case 1', function () {
    const nums = [2, 3, 4, 6]

    const result = 8
    expect(tupleSameProduct(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 2, 4, 5, 10]

    const result = 16
    expect(tupleSameProduct(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [2, 3, 4, 6, 8, 12]

    const result = 40
    expect(tupleSameProduct(nums)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [2, 3, 5, 7]

    const result = 0
    expect(tupleSameProduct(nums)).toEqual(result)
  })
})
