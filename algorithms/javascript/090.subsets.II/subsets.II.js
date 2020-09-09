// Source : https://leetcode.com/problems/subsets-ii/
// Author : acgotaku311
// Date   : 2020-09-09

/** ********************************************************************************
*
* Given a collection of integers that might contain duplicates, S, return all possible subsets.
*
* Note:
*
* Elements in a subset must be in non-descending order.
* The solution set must not contain duplicate subsets.
*
* For example,
* If S = [1,2,2], a solution is:
*
* [
*   [2],
*   [1],
*   [1,2,2],
*   [2,2],
*   [1,2],
*   []
* ]
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const result = []
  nums = nums.sort()

  const DFS = (stack, start, len) => {
    if (len === start) {
      result.push(stack.slice())
      return
    }

    for (let i = start; i < len; i++) {
      if (i > start && nums[i] === nums[i - 1]) {
        continue
      }
      stack.push(nums[i])
      DFS(stack, i + 1, len)
      stack.pop()
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    DFS([], 0, i)
  }
  return result
}

export { subsetsWithDup }
