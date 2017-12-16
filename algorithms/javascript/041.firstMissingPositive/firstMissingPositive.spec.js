import { firstMissingPositive } from './firstMissingPositive'

describe('firstMissingPositive', function () {
  it('firstMissingPositive test case 1', function () {
    const nums = [1, 2, 0]
    const result = 3
    expect(firstMissingPositive(nums)).toEqual(result)
  })
  it('firstMissingPositive test case 2', function () {
    const nums = [3, 4, -1, 1]
    const result = 2
    expect(firstMissingPositive(nums)).toEqual(result)
  })
  it('firstMissingPositive test case 3', function () {
    const nums = [3]
    const result = 1
    expect(firstMissingPositive(nums)).toEqual(result)
  })
  it('firstMissingPositive test case 4', function () {
    const nums = [1000, -1]
    const result = 1
    expect(firstMissingPositive(nums)).toEqual(result)
  })
  it('firstMissingPositive test case 5', function () {
    const nums = [1]
    const result = 2
    expect(firstMissingPositive(nums)).toEqual(result)
  })
  it('firstMissingPositive test case 6', function () {
    const nums = [10, 4, 16, 54, 17, -7, 21, 15, 25, 31, 61, 1, 6, 12, 21, 46, 16, 56, 54, 12, 23, 20, 38, 63, 2, 27, 35, 11, 13, 47, 13, 11, 61, 39, 0, 14, 42, 8, 16, 54, 50, 12, -10, 43, 11, -1, 24, 38, -10, 13, 60, 0, 44, 11, 50, 33, 48, 20, 31, -4, 2, 54, -6, 51, 6]
    const result = 3
    expect(firstMissingPositive(nums)).toEqual(result)
  })
})
