import { getMinDistance } from './getMinDistance'

describe('getMinDistance', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 4, 5]
    const target = 5
    const start = 3

    const result = 1
    expect(getMinDistance(nums, target, start)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1]
    const target = 1
    const start = 0

    const result = 0
    expect(getMinDistance(nums, target, start)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    const target = 1
    const start = 0

    const result = 0
    expect(getMinDistance(nums, target, start)).toEqual(result)
  })
})
