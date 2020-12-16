import { maxProfit } from './bestTimeToBuyAndSellStock.III'

describe('minimumTotal', function () {
  it('test case 1', function () {
    const prices = [3, 3, 5, 0, 0, 3, 1, 4]
    const result = 6
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
    const prices = [1]
    const result = 0
    expect(maxProfit(prices)).toEqual(result)
  })
  it('test case 5', function () {
    const prices = [1, 2, 4, 2, 5, 7, 2, 4, 9, 0]
    const result = 13
    expect(maxProfit(prices)).toEqual(result)
  })
  it('test case 6', function () {
    const prices = [14, 9, 10, 12, 4, 8, 1, 16]
    const result = 19
    expect(maxProfit(prices)).toEqual(result)
  })
})
