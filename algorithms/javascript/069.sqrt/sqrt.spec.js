import { mySqrt } from './sqrt'

describe('mySqrt', function () {
  it('test case 1', function () {
    const x = 4
    expect(mySqrt(x)).toEqual(2)
  })
  it('test case 2', function () {
    const x = 0
    expect(mySqrt(x)).toEqual(0)
  })
  it('test case 3', function () {
    const x = 8
    expect(mySqrt(x)).toEqual(2)
  })
})
