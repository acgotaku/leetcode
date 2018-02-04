import { myPow } from './pow'

describe('myPow', function () {
  it('myPow test case 1', function () {
    const x = 5
    const n = 2
    expect(myPow(x, n)).toEqual(25)
  })
})
