import { findTheWinner } from './findTheWinner'

describe('findTheWinner', function () {
  it('test case 1', function () {
    const n = 5
    const k = 2

    const result = 3
    expect(findTheWinner(n, k)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 6
    const k = 5

    const result = 1
    expect(findTheWinner(n, k)).toEqual(result)
  })
})
