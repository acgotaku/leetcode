// Source : https://leetcode.com/problems/single-number-ii/
// Author : acgotaku311
// Date   : 2021-01-26

/** ********************************************************************************
*
* Given an array of integers, every element appears three times except for one. Find that single one.
*
* Note:
* Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
  const dict = {}
  nums.forEach(num => {
    if (dict[num]) {
      dict[num]++
    } else {
      dict[num] = 1
    }
  })

  for (const key in dict) {
    if (dict[key] === 1) {
      return Number(key)
    }
  }
}
export { singleNumber }
