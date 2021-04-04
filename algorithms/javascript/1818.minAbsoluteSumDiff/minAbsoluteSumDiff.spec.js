import { minAbsoluteSumDiff } from './minAbsoluteSumDiff'

describe('minAbsoluteSumDiff', function () {
  it('test case 1', function () {
    const nums1 = [1, 7, 5]
    const nums2 = [2, 3, 5]

    const result = 3
    expect(minAbsoluteSumDiff(nums1, nums2)).toEqual(result)
  })
  it('test case 2', function () {
    const nums1 = [2, 4, 6, 8, 10]
    const nums2 = [2, 4, 6, 8, 10]

    const result = 0
    expect(minAbsoluteSumDiff(nums1, nums2)).toEqual(result)
  })
  it('test case 3', function () {
    const nums1 = [1, 10, 4, 4, 2, 7]
    const nums2 = [9, 3, 5, 1, 7, 4]

    const result = 20
    expect(minAbsoluteSumDiff(nums1, nums2)).toEqual(result)
  })
})
