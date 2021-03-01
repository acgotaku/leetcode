import { findMin } from './findMinimumInRotatedSortedArray'

describe('findMin', function () {
  it('test case 1', function () {
    const nums = [3, 4, 5, 1, 2]
    const result = 1
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [4, 5, 6, 7, 0, 1, 2]
    const result = 0
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [11, 13, 15, 17]
    const result = 11
    expect(findMin(nums)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [1]
    const result = 1
    expect(findMin(nums)).toEqual(result)
  })
})
