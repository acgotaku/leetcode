import { combine } from './combinations'

describe('combine', function () {
  it('test case 1', function () {
    const n = 4
    const k = 2
    const result = [
      [2, 4],
      [3, 4],
      [2, 3],
      [1, 2],
      [1, 3],
      [1, 4]
    ]
    expect(combine(n, k).sort()).toEqual(result.sort())
  })
})
