import { shortestPalindrome } from './shortestPalindrome'

describe('rob', function () {
  it('test case 1', function () {
    const s = 'aacecaaa'

    const result = 'aaacecaaa'
    expect(shortestPalindrome(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'abcd'

    const result = 'dcbabcd'
    expect(shortestPalindrome(s)).toEqual(result)
  })
})
