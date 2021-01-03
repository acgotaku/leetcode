import { countPairs } from './countPairs'

describe('countPairs', function () {
  it('test case 1', function () {
    const deliciousness = [1, 3, 5, 7, 9]

    const result = 4

    expect(countPairs(deliciousness)).toEqual(result)
  })
  it('test case 2', function () {
    const deliciousness = [1, 1, 1, 3, 3, 3, 7]

    const result = 15

    expect(countPairs(deliciousness)).toEqual(result)
  })
})
