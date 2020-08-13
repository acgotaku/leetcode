import { maxSubArray } from './maximumSubArray'

describe('maxSubArray', function () {
  it('maxSubArray test case 1', function () {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    const sum = 6
    expect(maxSubArray(nums)).toEqual(sum)
  })
  it('maxSubArray test case 2', function () {
    const nums = [-2]
    const sum = -2
    expect(maxSubArray(nums)).toEqual(sum)
  })
})
