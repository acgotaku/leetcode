// Source : https://leetcode.com/problems/next-permutation/description/
// Author : acgotaku311
// Date   : 2017-12-07

/**********************************************************************************
*
* Implement next permutation, which rearranges numbers into the lexicographically next
* greater permutation of numbers.
*
* If such arrangement is not possible, it must rearrange it as the lowest possible order
* (ie, sorted in ascending order).
*
* The replacement must be in-place, do not allocate extra memory.
*
* Here are some examples. Inputs are in the left-hand column and its corresponding outputs
* are in the right-hand column.
*
*   1,2,3 → 1,3,2
*   3,2,1 → 1,2,3
*   1,1,5 → 1,5,1
*
**********************************************************************************/

/*
 * Take a look the following continuous permutation, can you find the patern?
 *
 *    1 2 3 4
 *    1 2 4 3
 *    1 3 2 4
 *    1 3 4 2
 *    1 4 2 3
 *    1 4 3 2
 *    2 1 3 4
 *    ...
 *
 * The pattern can be descripted as below:
 *
 *    1) from n-1 to 0, find the first place [i-1] which num[i-1] < num[i]
 *    2) from n-1 to i, find the first number from n-1 to i which >= num[i-1]
 *    3) swap the 2) num with the num[i-1]
 *    4) sort the sub-array [i, n) //actuall sort is fine as well
 *
 * For example:
 *
 *     1 4 3 2   <-- 1) find the first place which num[i-1] < num[i]
 *     ^
 *
 *     1 4 3 2   <-- 2) find the first number from n-1 to i which >= num[i-1]
 *     ^     ^
 *
 *     2 4 3 1   <-- 3) swap them
 *     ^     ^
 *
 *     2 4 3 1   <-- 4) sort
 *       ^   ^
 *
 *     2 1 3 4
 *
 * Edge Case:
 *
 *     4 3 2 1, the next permutation is 1 2 3 4
 */

/**
  * @param {number[]} nums
  * @return {void} Do not return anything, modify nums in-place instead.
  */
const nextPermutation = (nums) => {
  const len = nums.length
  for (let i = len - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      let j = len - 1
      while (nums[i - 1] >= nums[j]) {
        j--
      }
      [nums[j], nums[i - 1]] = [nums[i - 1], nums[j]]
      for (let m = i; m < len - 1; m++) {
        for (let n = i; n < len - 1 - m + i; n++) {
          if (nums[n] > nums[n + 1]) {
            [nums[n], nums[n + 1]] = [nums[n + 1], nums[n]]
          }
        }
      }
      return
    }
    if (i === 1) {
      nums.reverse()
    }
  }
}

export { nextPermutation }
