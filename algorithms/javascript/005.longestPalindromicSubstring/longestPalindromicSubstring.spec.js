import { longestPalindrome } from './longestPalindromicSubstring'

describe('longestPalindrome', function () {
  it('longestPalindrome test case 1', function () {
    const s = 'babad'
    expect(longestPalindrome(s)).toEqual('bab')
  })
  it('longestPalindrome test case 2', function () {
    const s = 'cbbd'
    expect(longestPalindrome(s)).toEqual('bb')
  })
})
