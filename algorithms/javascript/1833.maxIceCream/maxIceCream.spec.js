import { maxIceCream } from './maxIceCream'

describe('maxIceCream', function () {
  it('test case 1', function () {
    const costs = [1, 3, 2, 4, 1]
    const coins = 7

    const result = 4
    expect(maxIceCream(costs, coins)).toEqual(result)
  })
  it('test case 2', function () {
    const costs = [10, 6, 8, 7, 7, 8]
    const coins = 5

    const result = 0
    expect(maxIceCream(costs, coins)).toEqual(result)
  })
  it('test case 3', function () {
    const costs = [1, 6, 3, 1, 2, 5]
    const coins = 20

    const result = 6
    expect(maxIceCream(costs, coins)).toEqual(result)
  })
})
