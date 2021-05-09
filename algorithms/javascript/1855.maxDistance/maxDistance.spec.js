import { maxDistance } from './maxDistance'

describe('maxDistance', function () {
  it('test case 1', function () {
    const nums1 = [55, 30, 5, 4, 2]
    const nums2 = [100, 20, 10, 10, 5]

    const result = 2
    expect(maxDistance(nums1, nums2)).toEqual(result)
  })
  it('test case 2', function () {
    const nums1 = [2, 2, 2]
    const nums2 = [10, 10, 1]

    const result = 1
    expect(maxDistance(nums1, nums2)).toEqual(result)
  })
  it('test case 3', function () {
    const nums1 = [30, 29, 19, 5]
    const nums2 = [25, 25, 25, 25, 25]

    const result = 2
    expect(maxDistance(nums1, nums2)).toEqual(result)
  })
  it('test case 4', function () {
    const nums1 = [5, 4]
    const nums2 = [3, 2]

    const result = 0
    expect(maxDistance(nums1, nums2)).toEqual(result)
  })
})
