// Source : https://leetcode.com/problems/distinct-subsequences/
// Author : acgotaku311
// Date   : 2020-11-28

/** ***************************************************************************************************
 *
 * Given a string S and a string T, count the number of distinct subsequences of S which equals T.
 *
 * A subsequence of a string is a new string which is formed from the original string by deleting some
 * (can be none) of the characters without disturbing the relative positions of the remaining
 * characters. (ie, "ACE" is a subsequence of "ABCDE" while "AEC" is not).
 *
 * Example 1:
 *
 * Input: S = "rabbbit", T = "rabbit"
 * Output: 3
 * Explanation:
 *
 * As shown below, there are 3 ways you can generate "rabbit" from S.
 * (The caret symbol ^ means the chosen letters)
 *
 * rabbbit
 * ^^^^ ^^
 * rabbbit
 * ^^ ^^^^
 * rabbbit
 * ^^^ ^^^
 *
 * Example 2:
 *
 * Input: S = "babgbag", T = "bag"
 * Output: 5
 * Explanation:
 *
 * As shown below, there are 5 ways you can generate "bag" from S.
 * (The caret symbol ^ means the chosen letters)
 *
 * babgbag
 * ^^ ^
 * babgbag
 * ^^    ^
 * babgbag
 * ^    ^^
 * babgbag
 *   ^  ^^
 * babgbag
 *     ^^^
 *
 ******************************************************************************************************/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct = function (s, t) {
  const sLen = s.length
  const tLen = t.length
  const matrix = []
  for (let i = 0; i <= tLen; i++) {
    matrix.push(new Array(sLen + 1).fill(0))
  }
  for (let i = 0; i <= sLen; i++) {
    matrix[0][i] = 1
  }
  for (let i = 0; i < tLen; i++) {
    for (let j = 0; j < sLen; j++) {
      matrix[i + 1][j + 1] = matrix[i + 1][j]
      if (t[i] === s[j]) {
        matrix[i + 1][j + 1] += matrix[i][j]
      }
    }
  }
  return matrix[tLen][sLen]
}
export { numDistinct }
