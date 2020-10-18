// Source : https://leetcode.com/problems/largest-substring-between-two-equal-characters/
// Author : acgotaku311
// Date   : 2020-10-18

/**
 * @param {string} s
 * @return {number}
 */
const maxLengthBetweenEqualCharacters = function (s) {
  const dict = { }
  let result = -1
  const len = s.length
  for (let i = 0; i < len; i++) {
    const word = s[i]
    if (dict[word] === undefined) {
      dict[word] = i
    } else {
      result = Math.max(result, i - dict[word] - 1)
    }
  }
  return result
}

export { maxLengthBetweenEqualCharacters }
