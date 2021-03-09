// Source : https://leetcode.com/problems/fraction-to-recurring-decimal/
// Author : acgotaku311
// Date   : 2021-03-09

/** ********************************************************************************
*
* Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.
*
* If the fractional part is repeating, enclose the repeating part in parentheses.
*
* For example,
*
* Given numerator = 1, denominator = 2, return "0.5".
* Given numerator = 2, denominator = 1, return "2".
* Given numerator = 2, denominator = 3, return "0.(6)".
*
*
**********************************************************************************/

/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = function (numerator, denominator) {
  const nums = []
  const dict = {}

  let remainder = numerator % denominator
  const division = Number.parseInt(numerator / denominator)
  nums.push(division)
  if (remainder === 0) {
    return division.toString()
  }
  nums.push('.')
  while (remainder !== 0) {
    if (dict[remainder]) {
      nums.splice(dict[remainder], 0, '(')
      nums.push(')')
      break
    }
    dict[remainder] = nums.length
    remainder = remainder * 10
    nums.push(Number.parseInt(remainder / denominator))
    remainder = remainder % denominator
  }
  return nums.join('')
}
export { fractionToDecimal }
