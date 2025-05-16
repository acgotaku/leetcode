// Source : https://leetcode.com/problems/longest-palindromic-substring/description/
// Author : acgotaku311
// Date   : 2017-12-30

/**********************************************************************************
*
* Given a string S, find the longest palindromic substring in S.
* You may assume that the maximum length of S is 1000,
* and there exists one unique longest palindromic substring.
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const len = s.length
  const findPalindrome = (s, start, end) => {
    let left = start
    let right = end
    while (left >= 0 && right <= len - 1 && s[left] === s[right]) {
      left--
      right++
    }

    return s.substring(left + 1, right)
  }

  let substr = ''
  let max = ''
  for (let i = 0; i < len; i++) {
    substr = findPalindrome(s, i, i)
    if (substr.length > max.length) {
      max = substr
    }
    substr = findPalindrome(s, i, i + 1)
    if (substr.length > max.length) {
      max = substr
    }
  }

  return max
}
export { longestPalindrome }
