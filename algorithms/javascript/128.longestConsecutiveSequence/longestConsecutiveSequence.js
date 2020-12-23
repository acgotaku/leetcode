// Source : https://leetcode.com/problems/longest-consecutive-sequence/
// Author : acgotaku311
// Date   : 2020-12-23

/** ********************************************************************************
*
* Given an unsorted array of integers, find the length of the longest consecutive elements sequence.
*
* For example,
* Given [100, 4, 200, 1, 3, 2],
* The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.
*
* Your algorithm should run in O(n) complexity.
*
*
**********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  const dict = {}
  nums.forEach(num => {
    dict[num] = true
  })

  let max = 0
  for (let i = 0; i < nums.length; i++) {
    let cur = 1
    const num = nums[i]
    for (let m = num + 1; dict[m] !== undefined; m++) {
      delete dict[m]
      cur++
    }

    for (let n = num - 1; dict[n] !== undefined; n--) {
      delete dict[n]
      cur++
    }
    max = Math.max(max, cur)
  }

  return max
}

export { longestConsecutive }
