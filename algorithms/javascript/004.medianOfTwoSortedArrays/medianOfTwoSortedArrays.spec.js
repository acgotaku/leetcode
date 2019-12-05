import { findMedianSortedArrays } from './medianOfTwoSortedArrays'

describe('findMedianSortedArrays', function () {
  it('findMedianSortedArrays test case 1', function () {
    const nums1 = [1, 3]
    const nums2 = [2]
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2)
  })
  it('findMedianSortedArrays test case 2', function () {
    const nums1 = [1, 2]
    const nums2 = [3, 4]
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.5)
  })
  it('findMedianSortedArrays test case 3', function () {
    const nums1 = [5, 6, 7, 8]
    const nums2 = [1, 2, 3]
    expect(findMedianSortedArrays(nums1, nums2)).toEqual(5)
  })
})
