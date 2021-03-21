import { getNumberOfBacklogOrders } from './getNumberOfBacklogOrders'

describe('getNumberOfBacklogOrders', function () {
  it('test case 1', function () {
    const orders = [[10, 5, 0], [15, 2, 1], [25, 1, 1], [30, 4, 0]]

    const result = 6
    expect(getNumberOfBacklogOrders(orders)).toEqual(result)
  })
  it('test case 2', function () {
    const orders = [[7, 1000000000, 1], [15, 3, 0], [5, 999999995, 0], [5, 1, 1]]

    const result = 999999984
    expect(getNumberOfBacklogOrders(orders)).toEqual(result)
  })
})
