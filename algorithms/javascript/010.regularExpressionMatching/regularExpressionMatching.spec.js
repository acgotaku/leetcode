import { isMatch } from './regularExpressionMatching'

describe('isMatch', function () {
  it('isMatch test case 1', function () {
    const s = 'aa'
    const p = 'a'
    expect(isMatch(s, p)).toEqual(false)
  })
  it('isMatch test case 2', function () {
    const s = 'aa'
    const p = 'aa'
    expect(isMatch(s, p)).toEqual(true)
  })
  it('isMatch test case 3', function () {
    const s = 'aaa'
    const p = 'aa'
    expect(isMatch(s, p)).toEqual(false)
  })
  it('isMatch test case 4', function () {
    const s = 'ab'
    const p = '.*'
    expect(isMatch(s, p)).toEqual(true)
  })
})
