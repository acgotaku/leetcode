// Source : https://leetcode.com/problems/pascals-triangle-ii/
// Author : acgotaku311
// Date   : 2020-11-28

/** ********************************************************************************
*
* Given an index k, return the kth row of the Pascal's triangle.
*
* For example, given k = 3,
* Return [1,3,3,1].
*
* Note:
* Could you optimize your algorithm to use only O(k) extra space?
*
*
**********************************************************************************/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function (rowIndex) {
  const result = []
  for (let i = 0; i < rowIndex + 1; i++) {
    if (i === 0) {
      result.push([1])
      continue
    }
    if (i === 1) {
      result.push([1, 1])
      continue
    }
    const row = new Array(i + 1).fill(1)
    for (let j = 1; j < row.length - 1; j++) {
      row[j] = result[i - 1][j - 1] + result[i - 1][j]
    }

    result.push(row)
  }
  return result[rowIndex]
}

export { getRow }
