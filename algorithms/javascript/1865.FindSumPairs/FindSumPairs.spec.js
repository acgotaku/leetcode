import { FindSumPairs } from './FindSumPairs'

describe('FindSumPairs', function () {
  it('test case 1', function () {
    const findSumPairs = new FindSumPairs([1, 1, 2, 2, 2, 3], [1, 4, 5, 2, 5, 4])

    expect(findSumPairs.count(7)).toEqual(8)
    findSumPairs.add(3, 2)
    expect(findSumPairs.count(8)).toEqual(2)
    expect(findSumPairs.count(4)).toEqual(1)
    findSumPairs.add(0, 1)
    findSumPairs.add(1, 1)
    expect(findSumPairs.count(7)).toEqual(11)
  })
})
