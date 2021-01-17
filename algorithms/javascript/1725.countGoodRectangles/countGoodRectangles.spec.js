import { countGoodRectangles } from './countGoodRectangles'

describe('countGoodRectangles', function () {
  it('test case 1', function () {
    const rectangles = [[5, 8], [3, 9], [5, 12], [16, 5]]

    const result = 3
    expect(countGoodRectangles(rectangles)).toEqual(result)
  })
  it('test case 2', function () {
    const rectangles = [[2, 3], [3, 7], [4, 3], [3, 7]]

    const result = 3
    expect(countGoodRectangles(rectangles)).toEqual(result)
  })
  it('test case 3', function () {
    const rectangles = [[5, 8], [3, 9], [3, 12]]

    const result = 1
    expect(countGoodRectangles(rectangles)).toEqual(result)
  })
})
