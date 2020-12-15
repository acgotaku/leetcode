import { maxProfit } from './bestTimeToBuyAndSellStock.II'

describe('minimumTotal', function () {
  it('test case 1', function () {
    const prices = [7, 1, 5, 3, 6, 4]
    const result = 7
    expect(maxProfit(prices)).toEqual(result)
  })
  it('test case 2', function () {
    const prices = [1, 2, 3, 4, 5]
    const result = 4
    expect(maxProfit(prices)).toEqual(result)
  })
  it('test case 3', function () {
    const prices = [7, 6, 4, 3, 1]
    const result = 0
    expect(maxProfit(prices)).toEqual(result)
  })
  it('test case 4', function () {
    const prices = [2, 1, 2, 0, 1]
    const result = 2
    expect(maxProfit(prices)).toEqual(result)
  })
})
