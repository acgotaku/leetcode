// Source : https://leetcode.com/problems/integer-to-roman/description/
// Author : acgotaku311
// Date   : 2018-01-17

/**********************************************************************************
*
* Given an integer, convert it to a roman numeral.
*
* Input is guaranteed to be within the range from 1 to 3999.
*
**********************************************************************************/

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = (num) => {
  const symbol = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const value = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let result = ''
  for (let i = 0; num !== 0; i++) {
    while (num >= value[i]) {
      num = num - value[i]
      result = result + symbol[i]
    }
  }
  return result
}

export { intToRoman }
