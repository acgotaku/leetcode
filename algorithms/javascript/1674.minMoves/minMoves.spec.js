import { minMoves } from './minMoves'

describe('minMoves', function () {
  it('test case 1', function () {
    const nums = [1, 2, 4, 3]
    const limit = 4
    const result = 1

    expect(minMoves(nums, limit)).toEqual(result)
  })
  it('test case 2', function () {
    const nums = [1, 2, 2, 1]
    const limit = 2
    const result = 2

    expect(minMoves(nums, limit)).toEqual(result)
  })
  it('test case 3', function () {
    const nums = [1, 2, 1, 2]
    const limit = 2
    const result = 0

    expect(minMoves(nums, limit)).toEqual(result)
  })
  it('test case 4', function () {
    const nums = [28, 50, 76, 80, 64, 30, 32, 84, 53, 8]
    const limit = 84
    const result = 4

    expect(minMoves(nums, limit)).toEqual(result)
  })
  it('test case 5', function () {
    const nums = [3, 1, 2, 1, 2, 3, 3, 1, 2, 3, 2, 2, 1, 2, 3, 3, 3, 1, 1, 2, 3, 2, 1, 1, 2, 3, 3, 3, 1, 3, 3, 1, 1, 2, 2, 2, 2, 2, 1, 3, 1, 2, 2, 2]
    const limit = 3
    const result = 13

    expect(minMoves(nums, limit)).toEqual(result)
  })
})
