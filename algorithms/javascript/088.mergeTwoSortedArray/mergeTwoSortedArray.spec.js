import { merge } from './mergeTwoSortedArray'

describe('merge', function () {
  it('test case 1', function () {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3
    const result = [1, 2, 2, 3, 5, 6]
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual(result)
  })

  it('test case 2', function () {
    const nums1 = [1, 0, 0, 0]
    const m = 1
    const nums2 = [2, 5, 6]
    const n = 3
    const result = [1, 2, 5, 6]
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual(result)
  })
  it('test case 3', function () {
    const nums1 = [8, 0, 0, 0]
    const m = 1
    const nums2 = [2, 5, 6]
    const n = 3
    const result = [2, 5, 6, 8]
    merge(nums1, m, nums2, n)
    expect(nums1).toEqual(result)
  })
})
