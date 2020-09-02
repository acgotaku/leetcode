// Source : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
// Author : acgotaku311
// Date   : 2020-09-02

/** ********************************************************************************
*
* Follow up for "Remove Duplicates":
* What if duplicates are allowed at most twice?
*
* For example,
* Given sorted array A = [1,1,1,2,2,3],
*
* Your function should return length = 5, and A is now [1,1,2,2,3].
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  const len = nums.length
  let pos = 0
  let count = 1
  if (len < 3) {
    return len
  }
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      count++
      if (count === 2) {
        nums[++pos] = nums[i + 1]
      }
    } else {
      count = 1
      nums[++pos] = nums[i + 1]
    }
  }
  nums.splice(pos + 1)
  return pos + 1
}

export { removeDuplicates }
