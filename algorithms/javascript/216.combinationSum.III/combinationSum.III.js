// Source : https://leetcode.com/problems/combination-sum-iii/
// Author : acgotaku311
// Date   : 2021-05-10

/** ********************************************************************************
 *
 * Find all possible combinations of k numbers that add up to a number n,
 * given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.
 * Ensure that numbers within the set are sorted in ascending order.
 *
 *  Example 1:
 * Input:  k = 3,  n = 7
 * Output:
 *
 * [[1,2,4]]
 *
 *  Example 2:
 * Input:  k = 3,  n = 9
 * Output:
 *
 * [[1,2,6], [1,3,5], [2,3,4]]
 *
 *
 **********************************************************************************/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const res = []
  const loop = (arr, target) => {
    if (target < 0 || arr.length > k) {
      return
    }
    if (target === 0 && arr.length === k) {
      res.push(arr.slice())
    }
    for (let i = arr[arr.length - 1] + 1; i <= 9; i++) {
      arr.push(i)
      loop(arr, target - i)
      arr.pop()
    }
  }
  for (let i = 1; i <= 9; i++) {
    loop([i], n - i)
  }
  return res
}

export { combinationSum3 }
