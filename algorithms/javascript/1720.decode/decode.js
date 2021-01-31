// Source : https://leetcode.com/problems/decode-xored-array/
// Author : acgotaku311
// Date   : 2021-01-12

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
const decode = function (encoded, first) {
  const result = [first]
  let current = first
  while (encoded.length > 0) {
    const next = encoded.shift()
    const res = current ^ next
    result.push(res)
    current = res
  }
  return result
}

export { decode }
