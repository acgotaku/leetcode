import { maxProfit } from './bestTimeToBuyAndSellStock'

describe('minimumTotal', function () {
  it('test case 1', function () {
    const prices = [7, 1, 5, 3, 6, 4]
    const result = 5
    expect(maxProfit(prices)).toEqual(result)
  })
  it('test case 2', function () {
    const prices = [7, 6, 4, 3, 1]
    const result = 0
    expect(maxProfit(prices)).toEqual(result)
  })
})
