import { findCenter } from './findCenter'

describe('findCenter', function () {
  it('test case 1', function () {
    const edges = [[1, 2], [2, 3], [4, 2]]

    const result = 2
    expect(findCenter(edges)).toEqual(result)
  })
  it('test case 2', function () {
    const edges = [[1, 2], [5, 1], [1, 3], [1, 4]]

    const result = 1
    expect(findCenter(edges)).toEqual(result)
  })
})
