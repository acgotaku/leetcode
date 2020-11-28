import { kthSmallest } from './kthSmallest'

describe('kthSmallest', function () {
  it('test case 1', function () {
    const matrix = [
      [1, 5, 9],
      [10, 11, 13],
      [12, 13, 15]
    ]
    const k = 8
    const result = 13
    expect(kthSmallest(matrix, k)).toEqual(result)
  })
})
