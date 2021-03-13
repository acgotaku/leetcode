// Source : https://leetcode.com/problems/largest-number/
// Author : acgotaku311
// Date   : 2021-03-13

/** ********************************************************************************
 *
 * Given a list of non negative integers, arrange them such that they form the largest number.
 *
 * For example, given [3, 30, 34, 5, 9], the largest formed number is 9534330.
 *
 * Note: The result may be very large, so you need to return a string instead of an integer.
 *
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  let str = nums.map(x => x.toString())
  str = str.sort((a, b) => {
    if (a + b > b + a) {
      return -1
    } else if (a + b < b + a) {
      return 1
    }
    return 0
  })
  let result = str.join('')
  while (result[0] === '0' && result.length > 1) {
    result = result.substr(1)
  }
  return result
}
export { largestNumber }
