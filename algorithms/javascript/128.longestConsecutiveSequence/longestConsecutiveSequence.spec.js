import { longestConsecutive } from './longestConsecutiveSequence'

describe('longestConsecutive', function () {
  it('test case 1', function () {
    const nums = [100, 4, 200, 1, 3, 2]
    const result = 4
    expect(longestConsecutive(nums)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
    const result = 9
    expect(longestConsecutive(nums)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = []
    const result = 0
    expect(longestConsecutive(nums)).toEqual(result)
  })
})
