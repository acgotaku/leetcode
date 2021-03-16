// Source : https://leetcode.com/problems/rotate-array/
// Author : acgotaku311
// Date   : 2021-03-16

/** ********************************************************************************
*
* Rotate an array of n elements to the right by k steps.
* For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].
*
* Note:
* Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
*
* Hint:
* Could you do it in-place with O(1) extra space?
*
* Related problem: Reverse Words in a String II
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  k = k % nums.length
  const rotated = nums.splice(-k)
  nums.splice(0, 0, ...rotated)
}
export { rotate }
