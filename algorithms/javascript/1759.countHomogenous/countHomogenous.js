// Source : https://leetcode.com/problems/count-number-of-homogenous-substrings/
// Author : acgotaku311
// Date   : 2021-02-14

/**
 * @param {string} s
 * @return {number}
 */
const countHomogenous = function (s) {
  const mod = Math.pow(10, 9) + 7
  const len = s.length
  let count = 1
  let start = 0
  for (let i = 1; i < len; i++) {
    if (s[i] === s[i - 1]) {
      count = (count + i - start + 1) % mod
    } else {
      count = (count + 1) % mod
      start = i
    }
  }
  return count
}

export { countHomogenous }
