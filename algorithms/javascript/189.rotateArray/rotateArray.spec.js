import { rotate } from './rotateArray'

describe('rotate', function () {
  it('test case 1', function () {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    const result = [5, 6, 7, 1, 2, 3, 4]

    rotate(nums, k)
    expect(nums).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [-1, -100, 3, 99]
    const k = 2

    const result = [3, 99, -1, -100]

    rotate(nums, k)
    expect(nums).toEqual(result)
  })
})
