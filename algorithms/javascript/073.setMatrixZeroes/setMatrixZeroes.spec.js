import { setZeroes } from './setMatrixZeroes'

describe('setZeroes', function () {
  it('test case 1', function () {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1]
    ]
    const result = [
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1]
    ]
    expect(setZeroes(matrix)).toEqual(result)
  })
  it('test case 2', function () {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5]
    ]
    const result = [
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0]
    ]
    expect(setZeroes(matrix)).toEqual(result)
  })
})
