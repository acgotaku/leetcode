// Source : https://leetcode.com/problems/majority-element/
// Author : acgotaku311
// Date   : 2021-03-11

/** ********************************************************************************
 *
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.
 *
 * You may assume that the array is non-empty and the majority element always exist in the array.
 *
 **********************************************************************************/

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const dict = {}
  let maxCount = Number.MIN_VALUE
  let maxNumber = Number.MIN_VALUE
  nums.forEach(num => {
    if (dict[num]) {
      dict[num]++
    } else {
      dict[num] = 1
    }
  })
  for (const key in dict) {
    if (dict[key] > maxCount) {
      maxCount = dict[key]
      maxNumber = key
    }
  }
  return Number(maxNumber)
}
export { majorityElement }
