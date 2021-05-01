import { findKthLargest } from './kthLargestElementInAnArray'

describe('findKthLargest', function () {
  it('test case 1', function () {
    const nums = [3, 2, 1, 5, 6, 4]
    const k = 2

    const result = 5
    expect(findKthLargest(nums, k)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]
    const k = 4

    const result = 4
    expect(findKthLargest(nums, k)).toEqual(result)
  })
})
