// Source : https://leetcode.com/problems/combination-sum-ii/description/
// Author : acgotaku311
// Date   : 2017-12-14

/**********************************************************************************
*
* Given a collection of candidate numbers (C) and a target number (T), find all
* unique combinations in C where the candidate numbers sums to T.
*
* Each number in C may only be used once in the combination.
*
* Note:
*
* > All numbers (including target) will be positive integers.
* > Elements in a combination (a1, a2, … , ak) must be in non-descending order.
*   (ie, a1 ≤ a2 ≤ … ≤ ak).
* > The solution set must not contain duplicate combinations.
*
* For example, given candidate set 10,1,2,7,6,1,5 and target 8,
* A solution set is:
* [1, 7]
* [1, 2, 5]
* [2, 6]
* [1, 1, 6]
*
*
**********************************************************************************/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = (candidates, target) => {
  const result = []
  const stack = []
  const len = candidates.length
  const loop = (start, target) => {
    if (target < 0) {
      return
    }
    if (target === 0) {
      result.push(stack.slice())
      return
    }
    for (let i = start; i < len; i++) {
      if (i > start && candidates[i] === candidates[i - 1]) {
        continue
      }
      stack.push(candidates[i])
      loop(i + 1, target - candidates[i])
      stack.pop()
    }
  }
  candidates.sort((a, b) => { return a - b })
  loop(0, target)
  return result
}

export { combinationSum2 }
