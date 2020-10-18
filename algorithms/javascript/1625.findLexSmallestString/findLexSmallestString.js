// Source : https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/
// Author : acgotaku311
// Date   : 2020-10-18

/**
 * @param {string} s
 * @param {number} a
 * @param {number} b
 * @return {string}
 */
const findLexSmallestString = function (s, a, b) {
  const queue = []
  const seen = new Set()
  const add = (str, num) => {
    const nums = str.split('').map(x => Number(x)).map((i, index) => {
      if (index % 2 !== 0) {
        return (i + num) % 10
      } else {
        return i
      }
    })
    return nums.join('')
  }
  const rotate = (str, index) => {
    const i = str.length - index
    return str.substr(i) + str.substr(0, i)
  }
  queue.push(s)
  while (queue.length > 0) {
    const current = queue.pop()
    if (!seen.has(current)) {
      seen.add(current)
      queue.push(add(current, a))
      queue.push(rotate(current, b))
    }
  }
  const result = Array.from(seen).sort()
  return result.shift()
}

export { findLexSmallestString }
