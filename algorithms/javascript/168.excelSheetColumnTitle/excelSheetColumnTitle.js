// Source : https://leetcode.com/problems/excel-sheet-column-title/
// Author : acgotaku311
// Date   : 2021-03-11

/** ********************************************************************************
 *
 * Given a positive integer, return its corresponding column title as appear in an Excel sheet.
 *
 * For example:
 *
 *     1 -> A
 *     2 -> B
 *     3 -> C
 *     ...
 *     26 -> Z
 *     27 -> AA
 *     28 -> AB
 *
 *
 **********************************************************************************/

/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = function (columnNumber) {
  const nums = []
  const A = 65

  while (columnNumber > 0) {
    const num = (columnNumber - 1) % 26
    nums.unshift(A + num)
    columnNumber -= num
    columnNumber = Number.parseInt(columnNumber / 26)
  }

  return String.fromCharCode(...nums)
}
export { convertToTitle }
