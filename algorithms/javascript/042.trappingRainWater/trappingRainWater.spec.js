import { trap } from './trappingRainWater'

describe('trappingRainWater', function () {
  it('trappingRainWater test case 1', function () {
    const nums = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
    const result = 6
    expect(trap(nums)).toEqual(result)
  })
  it('trappingRainWater test case 2', function () {
    const nums = [2, 0, 2]
    const result = 2
    expect(trap(nums)).toEqual(result)
  })
  it('trappingRainWater test case 3', function () {
    const nums = [5, 4, 1, 2]
    const result = 1
    expect(trap(nums)).toEqual(result)
  })
  it('trappingRainWater test case 4', function () {
    const nums = [5, 2, 1, 2, 1, 5]
    const result = 14
    expect(trap(nums)).toEqual(result)
  })
})
