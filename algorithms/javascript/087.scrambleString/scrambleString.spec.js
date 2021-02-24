import { isScramble } from './scrambleString'

describe('isScramble', function () {
  it('test case 1', function () {
    const s1 = 'great'
    const s2 = 'rgeat'
    expect(isScramble(s1, s2)).toEqual(true)
  })
  it('test case 2', function () {
    const s1 = 'abcde'
    const s2 = 'caebd'
    expect(isScramble(s1, s2)).toEqual(false)
  })
  it('test case 3', function () {
    const s1 = 'a'
    const s2 = 'a'
    expect(isScramble(s1, s2)).toEqual(true)
  })
  it('test case 4', function () {
    const s1 = 'abb'
    const s2 = 'bba'
    expect(isScramble(s1, s2)).toEqual(true)
  })
  it('test case 5', function () {
    const s1 = 'abc'
    const s2 = 'bca'
    expect(isScramble(s1, s2)).toEqual(true)
  })
  it('test case 6', function () {
    const s1 = 'ac'
    const s2 = 'bca'
    expect(isScramble(s1, s2)).toEqual(false)
  })
})
