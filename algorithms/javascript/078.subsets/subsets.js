// Source : https://leetcode.com/problems/subsets/
// Author : acgotaku311
// Date   : 2020-08-31

/** ********************************************************************************
*
* Given a set of distinct integers, S, return all possible subsets.
*
* Note:
*
* Elements in a subset must be in non-descending order.
* The solution set must not contain duplicate subsets.
*
* For example,
* If S = [1,2,3], a solution is:
*
* [
*   [3],
*   [1],
*   [2],
*   [1,2,3],
*   [1,3],
*   [2,3],
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
const subsets = function (nums) {
  const result = []
  const DFS = (stack, start, len) => {
    if (len === start) {
      result.push(stack.slice())
      return
    }

    for (let i = start; i < len; i++) {
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

export { subsets }
