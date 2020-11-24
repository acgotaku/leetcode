// Source : https://leetcode.com/problems/ways-to-make-a-fair-array/
// Author : acgotaku311
// Date   : 2020-11-24

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
const decrypt = function (code, k) {
  const result = []
  const len = code.length
  for (let i = 0; i < len; i++) {
    let sum = 0
    const sign = k > 0 ? 1 : -1
    for (let j = 0; j < Math.abs(k); j++) {
      const index = (i + (1 + j) * sign + len) % len
      sum += code[index]
    }
    result.push(sum)
  }
  return result
}
export { decrypt }
