import { searchMatrix } from './search2DMatrix'

describe('searchMatrix', function () {
  it('test case 1', function () {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]
    const target = 3
    expect(searchMatrix(matrix, target)).toEqual(true)
  })
  it('test case 2', function () {
    const matrix = [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 50]
    ]
    const target = 13
    expect(searchMatrix(matrix, target)).toEqual(false)
  })
})
