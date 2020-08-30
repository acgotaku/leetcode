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
  const stack = []
  const array = []
  const DFS = (array, combined, len) => {
    if (len === 0) {
      stack.push(combined)
    }

    for (let i = 0; i < array.length; i++) {
      DFS(array.slice(i + 1), combined.concat(array[i]), len - 1)
    }
  }

  for (let i = 0; i < n; i++) {
    array.push(i + 1)
  }

  DFS(array, [], k)
  return stack
}

export { combine }
