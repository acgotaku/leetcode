// Source : https://leetcode.com/problems/string-to-integer-atoi/description/
// Author : acgotaku311
// Date   : 2018-01-12

/**********************************************************************************
*
* Implement atoi to convert a string to an integer.
*
* Hint: Carefully consider all possible input cases. If you want a challenge,
*       please do not see below and ask yourself what are the possible input cases.
*
* Notes:
*   It is intended for this problem to be specified vaguely (ie, no given input specs).
*   You are responsible to gather all the input requirements up front.
*
*
* Requirements for atoi:
*
* The function first discards as many whitespace characters as necessary until the first
* non-whitespace character is found. Then, starting from this character, takes an optional
* initial plus or minus sign followed by as many numerical digits as possible, and interprets
* them as a numerical value.
*
* The string can contain additional characters after those that form the integral number,
* which are ignored and have no effect on the behavior of this function.
*
* If the first sequence of non-whitespace characters in str is not a valid integral number,
* or if no such sequence exists because either str is empty or it contains only whitespace
* characters, no conversion is performed.
*
* If no valid conversion could be performed, a zero value is returned. If the correct value
* is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648)
* is returned.
*
**********************************************************************************/

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  str = str.trim()
  const MAX_INT = Math.pow(2, 31) - 1
  const MIN_INT = -Math.pow(2, 31)
  let num = 0
  let neg = false
  let i = 0
  if (str.charAt(i) === '+' || str.charAt(i) === '-') {
    neg = str.charAt(i) === '-'
    i++
  }
  for (; i < str.length; i++) {
    if (str.charAt(i) >= '0' && str.charAt(i) <= '9') {
      num = num * 10 + (str.charAt(i) - 0)
    } else {
      break
    }
    if (neg) {
      if (-num < MIN_INT) {
        return MIN_INT
      }
    } else {
      if (num > MAX_INT) {
        return MAX_INT
      }
    }
  }

  return neg ? -num : num
}

export { myAtoi }
