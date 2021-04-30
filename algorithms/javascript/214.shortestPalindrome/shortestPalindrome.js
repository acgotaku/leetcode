// Source : https://leetcode.com/problems/shortest-palindrome/
// Author : acgotaku311
// Date   : 2021-04-29

/** ********************************************************************************
 *
 * Given a string S, you are allowed to convert it to a palindrome by adding characters in front of it.
 * Find and return the shortest palindrome you can find by performing this transformation.
 *
 * For example:
 * Given "aacecaaa", return "aaacecaaa".
 * Given "abcd", return "dcbabcd".
 *
 *
 **********************************************************************************/

const kmp = (str) => {
  const len = str.length
  const next = new Array(len).fill(0)
  for (let i = 1; i < len; i++) {
    let j = next[i - 1]
    while (j > 0 && str[i] !== str[j]) {
      j = next[j - 1]
    }
    if (str[i] === str[j]) {
      j++
    }
    next[i] = j
  }
  return next
}
/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function (s) {
  const str = s + '#' + s.split('').reverse().join('')
  const maxLen = kmp(str).pop()
  return s.substring(maxLen).split('').reverse().join('') + s
}

export { shortestPalindrome }
