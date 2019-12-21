import { fourSum } from './4Sum'

describe('fourSum', function () {
  it('fourSum test case 1', function () {
    const s = [1, 0, -1, 0, -2, 2]
    const target = 0
    const result = [
      [-1, 0, 0, 1],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2]
    ]
    expect(fourSum(s, target).sort()).toEqual(result.sort())
  })
  it('fourSum test case 2', function () {
    const s = [-3, -2, -1, 0, 0, 1, 2, 3]
    const target = 0
    const result = [[-3, -2, 2, 3], [-3, -1, 1, 3], [-3, 0, 0, 3], [-3, 0, 1, 2], [-2, -1, 0, 3], [-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
    expect(fourSum(s, target)).toEqual(result)
  })
  it('fourSum test case 3', function () {
    const s = [1, 0, -5]
    const target = 0
    const result = []
    expect(fourSum(s, target).sort()).toEqual(result.sort())
  })
  it('fourSum test case 4', function () {
    const s = [10, 1, 0, -1, 0, -2, 2, 2, 10]
    const target = 0
    const result = [
      [-1, 0, 0, 1],
      [-2, -1, 1, 2],
      [-2, 0, 0, 2]
    ]
    expect(fourSum(s, target).sort()).toEqual(result.sort())
  })
})
