import { kthLargestValue } from './kthLargestValue'

describe('kthLargestValue', function () {
  it('test case 1', function () {
    const matrix = [[5, 2], [1, 6]]
    const k = 1
    const result = 7
    expect(kthLargestValue(matrix, k)).toEqual(result)
  })
  it('test case 2', function () {
    const matrix = [[5, 2], [1, 6]]
    const k = 2
    const result = 5
    expect(kthLargestValue(matrix, k)).toEqual(result)
  })
  it('test case 3', function () {
    const matrix = [[5, 2], [1, 6]]
    const k = 3
    const result = 4
    expect(kthLargestValue(matrix, k)).toEqual(result)
  })
  it('test case 4', function () {
    const matrix = [[5, 2], [1, 6]]
    const k = 4
    const result = 0
    expect(kthLargestValue(matrix, k)).toEqual(result)
  })
})
