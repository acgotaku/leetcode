import { maximumScore } from './maximumScore'

describe('maximumScore', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3]
    const multipliers = [3, 2, 1]
    const result = 14
    expect(maximumScore(nums, multipliers)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [-5, -3, -3, -2, 7, 1]
    const multipliers = [-10, -5, 3, 4, 6]
    const result = 102
    expect(maximumScore(nums, multipliers)).toEqual(result)
  })
})
