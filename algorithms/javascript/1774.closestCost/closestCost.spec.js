import { closestCost } from './closestCost'

describe('closestCost', function () {
  it('test case 1', function () {
    const baseCosts = [1, 7]
    const toppingCosts = [3, 4]
    const target = 10

    const result = 10
    expect(closestCost(baseCosts, toppingCosts, target)).toEqual(result)
  })
  it('test case 2', function () {
    const baseCosts = [2, 3]
    const toppingCosts = [4, 5, 100]
    const target = 18

    const result = 17
    expect(closestCost(baseCosts, toppingCosts, target)).toEqual(result)
  })
  it('test case 3', function () {
    const baseCosts = [3, 10]
    const toppingCosts = [2, 5]
    const target = 9

    const result = 8
    expect(closestCost(baseCosts, toppingCosts, target)).toEqual(result)
  })
  it('test case 4', function () {
    const baseCosts = [10]
    const toppingCosts = [1]
    const target = 1

    const result = 10
    expect(closestCost(baseCosts, toppingCosts, target)).toEqual(result)
  })
})
