// Source : https://leetcode.com/problems/divide-two-integers/description/
// Author : acgotaku311
// Date   : 2018-01-31

/**********************************************************************************
*
* Divide two integers without using multiplication, division and mod operator.
*
* If it is overflow, return MAX_INT.
*
**********************************************************************************/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  let sum = 0
  let flag = false
  let count = 1
  const INT_MAX = 2147483647
  const INT_MIN = -2147483648
  if (dividend < 0) {
    flag = !flag
    dividend = -dividend
  }
  if (divisor < 0) {
    flag = !flag
    divisor = -divisor
  }
  const start = divisor
  while (dividend >= divisor) {
    dividend = dividend - divisor
    sum += count
    if (divisor + divisor > dividend) {
      divisor = start
      count = 1
    } else {
      divisor += divisor
      count += count
    }
  }

  sum = flag ? -sum : sum
  if (sum > INT_MAX) {
    return INT_MAX
  } else if (sum < INT_MIN) {
    return INT_MIN
  } else {
    return sum
  }
}

export { divide }
