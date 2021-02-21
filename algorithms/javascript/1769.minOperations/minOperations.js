// Source : https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
// Author : acgotaku311
// Date   : 2021-02-21

/**
 * @param {string} boxes
 * @return {number[]}
 */
const minOperations = function (boxes) {
  const len = boxes.length
  const res = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (boxes[j] === '1') {
        res[i] += Math.abs(j - i)
      }
    }
  }
  return res
}
export { minOperations }
