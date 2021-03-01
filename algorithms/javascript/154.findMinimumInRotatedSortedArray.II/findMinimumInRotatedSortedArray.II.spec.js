import { findMin } from './findMinimumInRotatedSortedArray.II'

describe('findMin', function () {
  it('test case 1', function () {
    const nums = [1, 3, 5]
    const result = 1
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [2, 2, 2, 0, 1]
    const result = 0
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [3, 3, 3, 1, 3]
    const result = 1
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [3, 3, 3, 3, 3]
    const result = 3
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 5', function () {
    const nums = [1]
    const result = 1
    expect(findMin(nums)).toEqual(result)
  })
})
