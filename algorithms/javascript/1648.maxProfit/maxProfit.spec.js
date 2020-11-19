import { maxProfit } from './maxProfit'

describe('maxProfit', function () {
  it('test case 1', function () {
    const inventory = [3, 5]
    const orders = 6
    const result = 19

    expect(maxProfit(inventory, orders)).toEqual(result)
  })
  it('test case 2', function () {
    const inventory = [1000000000]
    const orders = 1000000000
    const result = 21

    expect(maxProfit(inventory, orders)).toEqual(result)
  })
  it('test case 3', function () {
    const inventory = [2, 5]
    const orders = 4
    const result = 14

    expect(maxProfit(inventory, orders)).toEqual(result)
  })
  it('test case 4', function () {
    const inventory = [773160767]
    const orders = 252264991
    const result = 70267492

    expect(maxProfit(inventory, orders)).toEqual(result)
  })
})
