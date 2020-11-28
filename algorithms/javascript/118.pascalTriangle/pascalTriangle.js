// Source : https://leetcode.com/problems/pascals-triangle/
// Author : acgotaku311
// Date   : 2020-11-28

/** ********************************************************************************
*
* Given numRows, generate the first numRows of Pascal's triangle.
*
* For example, given numRows = 5,
* Return
*
* [
*      [1],
*     [1,1],
*    [1,2,1],
*   [1,3,3,1],
*  [1,4,6,4,1]
* ]
*
*
**********************************************************************************/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const result = []
  for (let i = 0; i < numRows; i++) {
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
  return result
}

export { generate }
