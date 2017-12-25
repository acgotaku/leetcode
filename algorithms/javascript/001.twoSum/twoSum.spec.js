import { twoSum } from './twoSum'

describe('twoSum', function () {
  it('twoSum test case 1', function () {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum(nums, target)).toEqual([0, 1])
  })
})
