import { minSwaps } from './minSwaps'

describe('minSwaps', function () {
  it('test case 1', function () {
    const s = '111000'

    const result = 1
    expect(minSwaps(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '010'

    const result = 0
    expect(minSwaps(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '1110'

    const result = -1
    expect(minSwaps(s)).toEqual(result)
  })
})
