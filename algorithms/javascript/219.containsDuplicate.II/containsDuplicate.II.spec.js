import { containsNearbyDuplicate } from './containsDuplicate.II'

describe('containsNearbyDuplicate', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 1]
    const k = 3

    const result = true
    expect(containsNearbyDuplicate(nums, k)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 0, 1, 1]
    const k = 1

    const result = true
    expect(containsNearbyDuplicate(nums, k)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 2, 3, 1, 2, 3]
    const k = 2

    const result = false
    expect(containsNearbyDuplicate(nums, k)).toEqual(result)
  })
})
