import { furthestBuilding } from './furthestBuilding'

describe('furthestBuilding', function () {
  it('test case 1', function () {
    const heights = [4, 2, 7, 6, 9, 14, 12]
    const bricks = 5
    const ladders = 1
    const result = 4

    expect(furthestBuilding(heights, bricks, ladders)).toEqual(result)
  })
  it('test case 2', function () {
    const heights = [14, 3, 19, 3]
    const bricks = 17
    const ladders = 0
    const result = 3

    expect(furthestBuilding(heights, bricks, ladders)).toEqual(result)
  })
  it('test case 3', function () {
    const heights = [4, 12, 2, 7, 3, 18, 20, 3, 19]
    const bricks = 10
    const ladders = 2
    const result = 7

    expect(furthestBuilding(heights, bricks, ladders)).toEqual(result)
  })
})
