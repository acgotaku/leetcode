import { uniquePathsWithObstacles } from './uniquePaths.II'

describe('uniquePathsWithObstacles', function () {
  it('uniquePathsWithObstacles test case 1', function () {
    const obstacleGrid = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
    expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(2)
  })
  it('uniquePathsWithObstacles test case 2', function () {
    const obstacleGrid = [
      [1, 0]
    ]
    expect(uniquePathsWithObstacles(obstacleGrid)).toEqual(0)
  })
})
