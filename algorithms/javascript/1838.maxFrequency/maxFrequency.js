// Source : https://leetcode.com/problems/frequency-of-the-most-frequent-element/
// Author : acgotaku311
// Date   : 2021-04-25

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxFrequency = function (nums, k) {
  nums = nums.sort((a, b) => (a - b))
  let time = k
  let maxCount = 1
  let count = 1
  for (let i = 0; i < nums.length - 1; i++) {
    time = k
    count = 1
    for (let j = i + 1; j < nums.length; j++) {
      const gap = (nums[j] - nums[j - 1]) * (j - i)
      if (gap <= time) {
        time = time - gap
        count++
        maxCount = Math.max(maxCount, count)
      } else {
        break
      }
    }
  }
  return maxCount
}
export { maxFrequency }
