// Source : https://leetcode.com/problems/sort-an-array/
// Author : acgotaku311
// Date   : 2021-05-01

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  const len = nums.length
  for (let i = 0; i < len - 1; i++) {
    let sorted = true
    for (let j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
        sorted = false
      }
    }
    if (sorted) {
      break
    }
  }
  return nums
}

export { sortArray }
