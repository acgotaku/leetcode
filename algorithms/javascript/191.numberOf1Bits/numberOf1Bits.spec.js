import { hammingWeight } from './numberOf1Bits'

describe('reverseBits', function () {
  it('test case 1', function () {
    const num = 11

    const result = 3
    expect(hammingWeight(num)).toEqual(result)
  })
})
