import { minElements } from './minElements'

describe('minElements', function () {
  it('test case 1', function () {
    const nums = [1, -1, 1]
    const limit = 3
    const goal = -4

    const result = 2
    expect(minElements(nums, limit, goal)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, -10, 9, 1]
    const limit = 100
    const goal = 0

    const result = 1
    expect(minElements(nums, limit, goal)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1]
    const limit = 1
    const goal = 3

    const result = 2
    expect(minElements(nums, limit, goal)).toEqual(result)
  })
})
