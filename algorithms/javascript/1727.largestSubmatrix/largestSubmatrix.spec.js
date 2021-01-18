import { largestSubmatrix } from './largestSubmatrix'

describe('largestSubmatrix', function () {
  it('test case 1', function () {
    const matrix = [[0, 0, 1], [1, 1, 1], [1, 0, 1]]
    const result = 4
    expect(largestSubmatrix(matrix)).toEqual(result)
  })
  it('test case 2', function () {
    const matrix = [[1, 0, 1, 0, 1]]
    const result = 3
    expect(largestSubmatrix(matrix)).toEqual(result)
  })
  it('test case 3', function () {
    const matrix = [[1, 1, 0], [1, 0, 1]]
    const result = 2
    expect(largestSubmatrix(matrix)).toEqual(result)
  })
  it('test case 4', function () {
    const matrix = [[0, 0], [0, 0]]
    const result = 0
    expect(largestSubmatrix(matrix)).toEqual(result)
  })
  it('test case 5', function () {
    const matrix = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1], [0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1]]
    const result = 34
    expect(largestSubmatrix(matrix)).toEqual(result)
  })
})
