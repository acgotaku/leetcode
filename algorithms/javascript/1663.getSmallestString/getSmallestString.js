// Source : https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/
// Author : acgotaku311
// Date   : 2020-11-23

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getSmallestString = function (n, k) {
  const a = 1
  const z = 26
  const result = []
  while (n > 0) {
    if (Math.ceil(k / z) < n) {
      result.push(a)
      k--
      n--
      continue
    }
    const num = k % z
    if (num > 0) {
      result.push(num)
      n--
      k = k - num
    } else {
      result.push(z)
      n--
      k = k - z
    }
  }
  return result.map(i => String.fromCharCode(i + 96)).join('')
}
export { getSmallestString }
