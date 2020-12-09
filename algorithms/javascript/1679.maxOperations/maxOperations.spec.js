import { maxOperations } from './maxOperations'

describe('maxOperations', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 4]
    const k = 5

    const result = 2

    expect(maxOperations(nums, k)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [3, 1, 3, 4, 3]
    const k = 6

    const result = 1

    expect(maxOperations(nums, k)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [2, 5, 4, 4, 1, 3, 4, 4, 1, 4, 4, 1, 2, 1, 2, 2, 3, 2, 4, 2]

    const k = 3

    const result = 4

    expect(maxOperations(nums, k)).toEqual(result)
  })
})
