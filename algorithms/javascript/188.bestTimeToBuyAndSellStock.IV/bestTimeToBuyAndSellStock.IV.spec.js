import { maxProfit } from './bestTimeToBuyAndSellStock.IV'

describe('maxProfit', function () {
  it('test case 1', function () {
    const k = 2
    const prices = [2, 4, 1]
    const result = 2

    expect(maxProfit(k, prices)).toEqual(result)
  })
  it('test case 2', function () {
    const k = 2
    const prices = [3, 2, 6, 5, 0, 3]
    const result = 7

    expect(maxProfit(k, prices)).toEqual(result)
  })
  it('test case 3', function () {
    const k = 2
    const prices = []
    const result = 0

    expect(maxProfit(k, prices)).toEqual(result)
  })
  it('test case 4', function () {
    const k = 2
    const prices = [2, 1]
    const result = 0

    expect(maxProfit(k, prices)).toEqual(result)
  })
})
