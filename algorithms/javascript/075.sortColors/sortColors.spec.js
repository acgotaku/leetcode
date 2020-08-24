import { sortColors } from './sortColors'

describe('sortColors', function () {
  it('test case 1', function () {
    const nums = [2, 0, 2, 1, 1, 0]
    const result = [0, 0, 1, 1, 2, 2]
    sortColors(nums)
    expect(nums).toEqual(result)
  })
})
