// Source : https://leetcode.com/problems/sign-of-the-product-of-an-array/
// Author : acgotaku311
// Date   : 2021-04-11

/**
 * @param {number[]} nums
 * @return {number}
 */
const arraySign = function (nums) {
  let product = 1
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (num === 0) {
      return 0
    }
    product = product * num
  }
  if (product > 0) {
    return 1
  } else if (product < 0) {
    return -1
  }
}
export { arraySign }
