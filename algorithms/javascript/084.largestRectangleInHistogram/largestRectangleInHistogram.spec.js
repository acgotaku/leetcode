import { largestRectangleArea } from './largestRectangleInHistogram'

describe('largestRectangleArea', function () {
  it('test case 1', function () {
    const heights = [2, 1, 5, 6, 2, 3]
    const result = 10
    expect(largestRectangleArea(heights)).toEqual(result)
  })
})
