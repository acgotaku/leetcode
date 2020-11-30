import { maximumWealth } from './maximumWealth'

describe('maximumWealth', function () {
  it('test case 1', function () {
    const accounts = [[1, 2, 3], [3, 2, 1]]
    const result = 6

    expect(maximumWealth(accounts)).toEqual(result)
  })
  it('test case 2', function () {
    const accounts = [[1, 5], [7, 3], [3, 5]]
    const result = 10

    expect(maximumWealth(accounts)).toEqual(result)
  })
  it('test case 3', function () {
    const accounts = [[2, 8, 7], [7, 1, 3], [1, 9, 5]]
    const result = 17

    expect(maximumWealth(accounts)).toEqual(result)
  })
})
