import { generateMatrix } from './spiralMatrix.II'

describe('generateMatrix', function () {
  it('generateMatrix test case 1', function () {
    const matrix = [
      [1, 2, 3],
      [8, 9, 4],
      [7, 6, 5]
    ]
    const n = 3
    expect(generateMatrix(n)).toEqual(matrix)
  })
})
