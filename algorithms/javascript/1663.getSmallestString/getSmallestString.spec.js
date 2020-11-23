import { getSmallestString } from './getSmallestString'

describe('getSmallestString', function () {
  it('test case 1', function () {
    const n = 3
    const k = 27
    const result = 'aay'

    expect(getSmallestString(n, k)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 5
    const k = 73
    const result = 'aaszz'

    expect(getSmallestString(n, k)).toEqual(result)
  })
})
