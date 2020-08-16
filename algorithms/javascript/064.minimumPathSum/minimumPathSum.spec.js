import { minPathSum } from './minimumPathSum'

describe('minPathSum', function () {
  it('minPathSum test case 1', function () {
    const grid = [
      [1, 3, 1],
      [1, 5, 1],
      [4, 2, 1]
    ]
    expect(minPathSum(grid)).toEqual(7)
  })
  it('minPathSum test case 2', function () {
    const grid = []
    expect(minPathSum(grid)).toEqual(0)
  })
  it('minPathSum test case 3', function () {
    const grid = [
      []
    ]
    expect(minPathSum(grid)).toEqual(0)
  })
  it('minPathSum test case 4', function () {
    const grid = [
      [0, 1],
      [1, 0]
    ]
    expect(minPathSum(grid)).toEqual(1)
  })
})
