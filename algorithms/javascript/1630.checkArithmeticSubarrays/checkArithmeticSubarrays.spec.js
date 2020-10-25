import { checkArithmeticSubarrays } from './checkArithmeticSubarrays'

describe('checkArithmeticSubarrays', function () {
  // it('test case 1', function () {
  //   const nums = [4, 6, 5, 9, 3, 7]
  //   const l = [0, 0, 2]
  //   const r = [2, 3, 5]
  //   const result = [true, false, true]

  //   expect(checkArithmeticSubarrays(nums, l, r)).toEqual(result)
  // })
  it('test case 2', function () {
    const nums = [-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10]
    const l = [0, 1, 6, 4, 8, 7]
    const r = [4, 4, 9, 7, 9, 10]
    const result = [false, true, false, false, true, true]

    expect(checkArithmeticSubarrays(nums, l, r)).toEqual(result)
  })
})
