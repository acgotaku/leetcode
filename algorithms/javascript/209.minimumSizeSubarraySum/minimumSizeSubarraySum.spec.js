import { minSubArrayLen } from './minimumSizeSubarraySum'

describe('minSubArrayLen', function () {
  it('test case 1', function () {
    const target = 7
    const nums = [2, 3, 1, 2, 4, 3]

    const result = 2
    expect(minSubArrayLen(target, nums)).toEqual(result)
  })
  it('test case 2', function () {
    const target = 4
    const nums = [1, 4, 4]

    const result = 1
    expect(minSubArrayLen(target, nums)).toEqual(result)
  })
  it('test case 3', function () {
    const target = 11
    const nums = [1, 1, 1, 1, 1, 1, 1, 1]

    const result = 0
    expect(minSubArrayLen(target, nums)).toEqual(result)
  })
})
