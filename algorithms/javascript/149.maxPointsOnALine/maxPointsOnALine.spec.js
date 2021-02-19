import { maxPoints } from './maxPointsOnALine'

describe('maxPoints', function () {
  it('test case 1', function () {
    const points = [[1, 1], [2, 2], [3, 3]]
    const result = 3
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 2', function () {
    const points = [[1, 1], [3, 2], [5, 3], [4, 1], [2, 3], [1, 4]]
    const result = 4
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 3', function () {
    const points = []
    const result = 0
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 4', function () {
    const points = [[0, 0], [0, 0]]
    const result = 2
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 5', function () {
    const points = [[0, 0], [0, 0], [1, 1], [1, 1]]
    const result = 4
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 6', function () {
    const points = [[0, 0], [0, 1]]
    const result = 2
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 7', function () {
    const points = [[0, 0], [-1, -1], [2, 2]]
    const result = 3
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 8', function () {
    const points = [[4, 0], [4, -1], [4, 5]]
    const result = 3
    expect(maxPoints(points)).toEqual(result)
  })
  it('test case 9', function () {
    const points = [[0, 0], [94911151, 94911150], [94911152, 94911151]]
    const result = 2
    expect(maxPoints(points)).toEqual(result)
  })
})
