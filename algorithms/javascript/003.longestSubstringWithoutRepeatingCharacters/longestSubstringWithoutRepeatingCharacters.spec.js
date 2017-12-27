import { lengthOfLongestSubstring } from './longestSubstringWithoutRepeatingCharacters'

describe('lengthOfLongestSubstring', function () {
  it('lengthOfLongestSubstring test case 1', function () {
    const s = 'abcabcbb'
    expect(lengthOfLongestSubstring(s)).toEqual(3)
  })
  it('lengthOfLongestSubstring test case 2', function () {
    const s = 'bbbbb'
    expect(lengthOfLongestSubstring(s)).toEqual(1)
  })
  it('lengthOfLongestSubstring test case 3', function () {
    const s = 'pwwkew'
    expect(lengthOfLongestSubstring(s)).toEqual(3)
  })
  it('lengthOfLongestSubstring test case 4', function () {
    const s = 'dvdf'
    expect(lengthOfLongestSubstring(s)).toEqual(3)
  })
  it('lengthOfLongestSubstring test case 5', function () {
    const s = 'asjrgapa'
    expect(lengthOfLongestSubstring(s)).toEqual(6)
  })
})
