import { findLexSmallestString } from './findLexSmallestString'

describe('findLexSmallestString', function () {
  it('test case 1', function () {
    const s = '5525'
    const a = 9
    const b = 2
    const result = '2050'

    expect(findLexSmallestString(s, a, b)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '74'
    const a = 5
    const b = 1
    const result = '24'

    expect(findLexSmallestString(s, a, b)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '0011'
    const a = 4
    const b = 2
    const result = '0011'

    expect(findLexSmallestString(s, a, b)).toEqual(result)
  })
  it('test case 4', function () {
    const s = '43987654'
    const a = 7
    const b = 3
    const result = '00553311'

    expect(findLexSmallestString(s, a, b)).toEqual(result)
  })
})
