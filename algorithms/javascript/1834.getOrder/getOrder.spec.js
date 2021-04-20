import { getOrder } from './getOrder'

describe('getOrder', function () {
  it('test case 1', function () {
    const tasks = [[1, 2], [2, 4], [3, 2], [4, 1]]

    const result = [0, 2, 3, 1]
    expect(getOrder(tasks)).toEqual(result)
  })
  it('test case 2', function () {
    const tasks = [[7, 10], [7, 12], [7, 5], [7, 4], [7, 2]]

    const result = [4, 3, 2, 0, 1]
    expect(getOrder(tasks)).toEqual(result)
  })
  it('test case 3', function () {
    const tasks = [[19, 13], [16, 9], [21, 10], [32, 25], [37, 4], [49, 24], [2, 15], [38, 41], [37, 34], [33, 6], [45, 4], [18, 18], [46, 39], [12, 24]]

    const result = [6, 1, 2, 9, 4, 10, 0, 11, 5, 13, 3, 8, 12, 7]
    expect(getOrder(tasks)).toEqual(result)
  })
})
