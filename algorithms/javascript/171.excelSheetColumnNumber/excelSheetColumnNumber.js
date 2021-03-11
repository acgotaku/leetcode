// Source : https://leetcode.com/problems/excel-sheet-column-number/
// Author : acgotaku311
// Date   : 2021-03-11

/** ********************************************************************************
 *
 * Related to question Excel Sheet Column Title
 * Given a column title as appear in an Excel sheet, return its corresponding column number.
 *
 * For example:
 *     A -> 1
 *     B -> 2
 *     C -> 3
 *     ...
 *     Z -> 26
 *     AA -> 27
 *     AB -> 28
 *
 **********************************************************************************/

/**
 * @param {string} columnTitle
 * @return {number}
 */
const titleToNumber = function (columnTitle) {
  let num = 0
  const A = 'A'.charCodeAt(0)
  for (let i = 0; i < columnTitle.length; i++) {
    const n = columnTitle.charCodeAt(i) - A + 1
    num = num * 26 + n
  }
  return num
}
export { titleToNumber }
