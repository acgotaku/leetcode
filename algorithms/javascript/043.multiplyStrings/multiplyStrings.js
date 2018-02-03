// Source : https://leetcode.com/problems/multiply-strings/description/
// Author : acgotaku311
// Date   : 2018-02-03

/**********************************************************************************
*
* Given two numbers represented as strings, return multiplication of the numbers as a string.
*
* Note: The numbers can be arbitrarily large and are non-negative.
*
**********************************************************************************/

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = (num1, num2) => {
  const reverse = str => str.split('').reverse().join('')
  num1 = reverse(num1)
  num2 = reverse(num2)
  const len1 = num1.length
  const len2 = num2.length
  const len = len1 + len2
  const result = new Array(len).fill(0)
  for (let i = 0; i < len1; i++) {
    let carry = 0
    const val = +num1[i]
    for (let j = 0; j < len2; j++) {
      carry += val * (+num2[j]) + result[i + j]
      result[i + j] = carry % 10
      carry = Number.parseInt(carry / 10)
    }
    if (carry) {
      result[len2 + i] = carry
    }
  }
  result.reverse()
  let count = 0
  while (count < len - 1 && result[count] === 0) {
    count++
  }
  result.splice(0, count)
  return result.join('')
}

export { multiply }
