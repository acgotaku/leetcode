import { rangeBitwiseAnd } from './bitwiseANDOfNumbersRange'

describe('rangeBitwiseAnd', function () {
  it('test case 1', function () {
    const left = 5
    const right = 7
    const result = 4
    expect(rangeBitwiseAnd(left, right)).toEqual(result)
  })
})
