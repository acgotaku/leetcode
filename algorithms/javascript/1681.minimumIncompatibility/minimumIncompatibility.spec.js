import { minimumIncompatibility } from './minimumIncompatibility'

describe('minimumIncompatibility', function () {
  it('test case 1', function () {
    const nums = [1, 2, 1, 4]
    const k = 2

    const result = 4

    expect(minimumIncompatibility(nums, k)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [6, 3, 8, 1, 3, 1, 2, 2]
    const k = 4

    const result = 6

    expect(minimumIncompatibility(nums, k)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [5, 3, 3, 6, 3, 3]
    const k = 3

    const result = -1

    expect(minimumIncompatibility(nums, k)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [10, 4, 4, 2, 11, 10, 8, 9, 1, 2, 2, 10]

    const k = 4

    const result = 21

    expect(minimumIncompatibility(nums, k)).toEqual(result)
  })
  // it('test case 5', function () {
  //   const nums = [7, 3, 16, 15, 1, 13, 1, 2, 14, 5, 3, 10, 6, 2, 7, 15]

  //   const k = 8

  //   const result = 21

  //   expect(minimumIncompatibility(nums, k)).toEqual(result)
  // })
})
