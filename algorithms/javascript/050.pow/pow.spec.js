import { myPow } from './pow'

describe('myPow', function () {
  it('myPow test case 1', function () {
    const x = 5
    const n = 2
    expect(myPow(x, n)).toEqual(25)
  })
  it('myPow test case 2', function () {
    const x = 2
    const n = 0
    expect(myPow(x, n)).toEqual(1)
  })
  it('myPow test case 3', function () {
    const x = 2
    const n = -2
    expect(myPow(x, n)).toEqual(0.25)
  })
})
