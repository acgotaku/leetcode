// Source : https://leetcode.com/problems/permutations/description/
// Author : acgotaku311
// Date   : 2017-12-17

/**********************************************************************************
*
* Given a collection of numbers, return all possible permutations.
*
* For example,
* [1,2,3] have the following permutations:
* [1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = (nums) => {
  const len = nums.length
  const result = []
  if (len === 0) {
    return result
  }
  result.push([nums[0]])
  if (len === 1) {
    return result
  }
  for (let i = 1; i < len; i++) {
    const n = result.length
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < result[j].length; k++) {
        const arr = result[j].slice()
        arr.splice(k, 0, nums[i])
        result.push(arr)
      }
      result[j].push(nums[i])
    }
  }
  return result
}

export { permute }
