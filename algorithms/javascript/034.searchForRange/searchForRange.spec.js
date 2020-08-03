import { searchRange } from './searchForRange'

describe('searchRange', function () {
  it('searchRange test case 1', function () {
    const nums = [5, 7, 7, 8, 8, 10]
    const target = 8
    const result = [3, 4]
    expect(searchRange(nums, target)).toEqual(result)
  })
  it('searchRange test case 2', function () {
    const nums = [5, 7, 7, 8, 8, 10]
    const target = 6
    const result = [-1, -1]
    expect(searchRange(nums, target)).toEqual(result)
  })
})
