import { numDistinct } from './distinctSubsequences'

describe('numDistinct', function () {
  it('test case 1', function () {
    const s = 'rabbbit'
    const t = 'rabbit'
    const result = 3
    expect(numDistinct(s, t)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'babgbag'
    const t = 'bag'
    const result = 5
    expect(numDistinct(s, t)).toEqual(result)
  })
})
