import { findBall } from './findBall'

describe('findBall', function () {
  it('test case 1', function () {
    const grid = [[1, 1, 1, -1, -1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]

    const result = [1, -1, -1, -1, -1]

    expect(findBall(grid)).toEqual(result)
  })
  it('test case 2', function () {
    const grid = [[-1]]

    const result = [-1]

    expect(findBall(grid)).toEqual(result)
  })
  it('test case 3', function () {
    const grid = [[1, 1, 1, -1, 1], [1, 1, 1, -1, -1], [-1, -1, -1, 1, 1], [1, 1, 1, 1, -1], [-1, -1, -1, -1, -1]]

    const result = [1, -1, -1, -1, -1]

    expect(findBall(grid)).toEqual(result)
  })
})
