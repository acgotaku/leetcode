// Source : https://leetcode.com/problems/combinations/
// Author : acgotaku311
// Date   : 2020-08-30

/** ********************************************************************************
*
* Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
*
* For example,
* If n = 4 and k = 2, a solution is:
*
* [
*   [2,4],
*   [3,4],
*   [2,3],
*   [1,2],
*   [1,3],
*   [1,4],
* ]
*
*
**********************************************************************************/

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const result = []
  const DFS = (stack, start) => {
    if (stack.length === k) {
      result.push(stack.slice())
      return
    }

    for (let i = start; i <= n; i++) {
      stack.push(i)
      DFS(stack, i + 1)
      stack.pop()
    }
  }

  DFS([], 1)
  return result
}

export { combine }
