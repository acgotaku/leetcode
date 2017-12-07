import { nextPermutation } from './nextPermutation'

describe('nextPermutation', function () {
  it('nextPermutation test case 1', function () {
    const nums = [1, 2, 3]
    nextPermutation(nums)
    const result = [1, 3, 2]
    expect(nums).toEqual(result)
  })

  it('nextPermutation test case 2', function () {
    const nums = [3, 2, 1]
    nextPermutation(nums)
    const result = [1, 2, 3]
    expect(nums).toEqual(result)
  })

  it('nextPermutation test case 3', function () {
    const nums = [5, 4, 7, 5, 3, 2]
    nextPermutation(nums)
    const result = [5, 5, 2, 3, 4, 7]
    expect(nums).toEqual(result)
  })
})
