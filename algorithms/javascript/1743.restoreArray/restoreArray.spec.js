import { restoreArray } from './restoreArray'

describe('restoreArray', function () {
  it('test case 1', function () {
    const adjacentPairs = [[2, 1], [3, 4], [3, 2]]
    const result = [1, 2, 3, 4]
    expect(restoreArray(adjacentPairs)).toEqual(result)
  })
  it('test case 2', function () {
    const adjacentPairs = [[4, -2], [1, 4], [-3, 1]]
    const result = [-2, 4, 1, -3]
    expect(restoreArray(adjacentPairs)).toEqual(result)
  })
  it('test case 3', function () {
    const adjacentPairs = [[100000, -100000]]
    const result = [100000, -100000]
    expect(restoreArray(adjacentPairs)).toEqual(result)
  })
})
