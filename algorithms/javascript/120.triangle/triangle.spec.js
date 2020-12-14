import { minimumTotal } from './triangle'

describe('minimumTotal', function () {
  it('test case 1', function () {
    const triangle = [
      [2],
      [3, 4],
      [6, 5, 7],
      [4, 1, 8, 3]
    ]
    const result = 11
    expect(minimumTotal(triangle)).toEqual(result)
  })
  it('test case 2', function () {
    const triangle = [
      [-1],
      [2, 3],
      [1, -1, -3]

    ]
    const result = -1
    expect(minimumTotal(triangle)).toEqual(result)
  })
})
