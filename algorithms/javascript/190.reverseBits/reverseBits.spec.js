import { reverseBits } from './reverseBits'

describe('reverseBits', function () {
  it('test case 1', function () {
    const num = 43261596

    const result = 964176192
    expect(reverseBits(num)).toEqual(result)
  })
})
