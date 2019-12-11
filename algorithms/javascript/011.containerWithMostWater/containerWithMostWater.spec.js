import { maxArea } from './containerWithMostWater'

describe('maxArea', function () {
  it('maxArea test case 1', function () {
    const s = [2, 5]
    const p = 2
    expect(maxArea(s)).toEqual(p)
  })
  it('maxArea test case 2', function () {
    const s = [1, 8, 6, 2, 5, 4, 8, 3, 7]
    const p = 49
    expect(maxArea(s)).toEqual(p)
  })
})
