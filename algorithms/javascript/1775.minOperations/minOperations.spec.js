import { minOperations } from './minOperations'

describe('minOperations', function () {
  it('test case 1', function () {
    const nums1 = [1, 2, 3, 4, 5, 6]
    const nums2 = [1, 1, 2, 2, 2, 2]

    const result = 3
    expect(minOperations(nums1, nums2)).toEqual(result)
  })
  it('test case 2', function () {
    const nums1 = [1, 1, 1, 1, 1, 1, 1]
    const nums2 = [6]

    const result = -1
    expect(minOperations(nums1, nums2)).toEqual(result)
  })
  it('test case 3', function () {
    const nums1 = [6, 6]
    const nums2 = [1]

    const result = 3
    expect(minOperations(nums1, nums2)).toEqual(result)
  })
  it('test case 4', function () {
    const nums1 = [5, 2, 1, 5, 2, 2, 2, 2, 4, 3, 3, 5]
    const nums2 = [1, 4, 5, 5, 6, 3, 1, 3, 3]

    const result = 1
    expect(minOperations(nums1, nums2)).toEqual(result)
  })
  it('test case 5', function () {
    const nums1 = [3, 3, 2, 4, 2, 6, 2]
    const nums2 = [6, 2, 6, 6, 1, 1, 4, 6, 4, 6, 2, 5, 4, 2, 1]

    const result = 8
    expect(minOperations(nums1, nums2)).toEqual(result)
  })
})
