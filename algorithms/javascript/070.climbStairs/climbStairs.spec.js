import { climbStairs } from './climbStairs'

describe('climbStairs', function () {
  it('test case 1', function () {
    const n = 2
    expect(climbStairs(n)).toEqual(2)
  })
  it('test case 2', function () {
    const n = 3
    expect(climbStairs(n)).toEqual(3)
  })
  it('test case 3', function () {
    const n = 44
    expect(climbStairs(n)).toEqual(1134903170)
  })
})
