import { getSkyline } from './getSkyline'

describe('getSkyline', function () {
  it('test case 1', function () {
    const buildings = [[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]

    const result = [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]
    expect(getSkyline(buildings)).toEqual(result)
  })
  it('test case 2', function () {
    const buildings = [[0, 2, 3], [2, 5, 3]]

    const result = [[0, 3], [5, 0]]
    expect(getSkyline(buildings)).toEqual(result)
  })
  // it('test case 3', function () {
  //   const buildings = [[1, 2, 1], [1, 2, 2], [1, 2, 3]]

  //   const result = [[1, 3], [2, 0]]
  //   expect(getSkyline(buildings)).toEqual(result)
  // })
})
