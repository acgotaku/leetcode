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

const isPalindrome = (str) => {
  const len = str.length
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false
    }
  }
  return true
}

/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome = function (s) {
  let str = s
  const len = s.length
  let count = 0
  while (!isPalindrome(str)) {
    count++
    str = s.substring(0, len - count)
  }
  return s.substring(len - count).split('').reverse().join('') + s
}

export { shortestPalindrome }
