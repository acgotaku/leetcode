import { minOperations } from './minOperations'

describe('minOperations', function () {
  it('test case 1', function () {
    const nums = [1, 1, 4, 2, 3]
    const x = 5
    const result = 2

    expect(minOperations(nums, x)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [5, 6, 7, 8, 9]
    const x = 4
    const result = -1

    expect(minOperations(nums, x)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [3, 2, 20, 1, 1, 3]
    const x = 10
    const result = 5

    expect(minOperations(nums, x)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [8828, 9581, 49, 9818, 9974, 9869, 9991, 10000, 10000, 10000, 9999, 9993, 9904, 8819, 1231, 6309]
    const x = 134365
    const result = 16

    expect(minOperations(nums, x)).toEqual(result)
  })
})
