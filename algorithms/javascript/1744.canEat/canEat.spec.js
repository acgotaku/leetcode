import { canEat } from './canEat'

describe('canEat', function () {
  it('test case 1', function () {
    const candiesCount = [7, 4, 5, 3, 8]
    const queries = [[0, 2, 2], [4, 2, 4], [2, 13, 1000000000]]
    const result = [true, false, true]
    expect(canEat(candiesCount, queries)).toEqual(result)
  })
  it('test case 2', function () {
    const candiesCount = [5, 2, 6, 4, 1]
    const queries = [[3, 1, 2], [4, 10, 3], [3, 10, 100], [4, 100, 30], [1, 3, 1]]
    const result = [false, true, true, false, false]
    expect(canEat(candiesCount, queries)).toEqual(result)
  })
})
