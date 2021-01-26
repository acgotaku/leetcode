// Source : https://leetcode.com/problems/single-number/
// Author : acgotaku311
// Date   : 2021-01-26

/** ********************************************************************************
*
* Given an array of integers, every element appears twice except for one. Find that single one.
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
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    res = res ^ nums[i]
  }
  return res
}
export { singleNumber }
