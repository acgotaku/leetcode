import { containsNearbyAlmostDuplicate } from './containsDuplicate.III'

describe('containsNearbyAlmostDuplicate', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 1]
    const indexDiff = 3
    const valueDiff = 0

    const result = true
    expect(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 5, 9, 1, 5, 9]
    const indexDiff = 2
    const valueDiff = 3

    const result = false
    expect(containsNearbyAlmostDuplicate(nums, indexDiff, valueDiff)).toEqual(result)
  })
})
