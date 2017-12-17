// Source : https://leetcode.com/problems/permutations-ii/description/
// Author : acgotaku311
// Date   : 2017-12-17

/**********************************************************************************
*
* Given a collection of numbers that might contain duplicates, return all possible unique permutations.
*
* For example,
* [1,1,2] have the following unique permutations:
* [1,1,2], [1,2,1], and [2,1,1].
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = (nums) => {
  const len = nums.length
  const result = []
  if (len === 0) {
    return result
  }
  nums.sort((a, b) => { return a - b })
  const loop = (head, tail) => {
    if (head.length === 0) {
      return result.push(tail)
    }
    for (let i = 0; i < head.length; i++) {
      if (i > 0 && head[i] === head[i - 1]) {
        continue
      }
      const arr = head.slice()
      arr.splice(i, 1)
      loop(arr, tail.concat(head[i]))
    }
  }
  loop(nums, [])
  return result
}
console.log('test')

export { permuteUnique }
