// Source : https://leetcode.com/problems/permutation-sequence/description/
// Author : acgotaku311
// Date   : 2018-02-24

/**********************************************************************************
*
* The set [1,2,3,…,n] contains a total of n! unique permutations.
*
* By listing and labeling all of the permutations in order,
* We get the following sequence (ie, for n = 3):
*
* "123"
* "132"
* "213"
* "231"
* "312"
* "321"
*
* Given n and k, return the kth permutation sequence.
*
* Note: Given n will be between 1 and 9 inclusive.
*
**********************************************************************************/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

const getPermutation = function (n, k) {
  const nums = []
  const result = []
  const factorial = new Array(n + 1).fill(1)
  for (let i = 1; i <= n; i++) {
    nums.push(i)
  }
  for (let i = 1; i <= n; i++) {
    factorial[i] = factorial[i - 1] * i
  }
  if (k > factorial[n]) {
    return ''
  }
  k--
  for (let i = n; i > 0; i--) {
    const j = Number.parseInt(k / factorial[i - 1])
    k = k % factorial[i - 1]
    result.push(nums[j])
    nums.splice(j, 1)
  }

  return result.join('')
}

export { getPermutation }
