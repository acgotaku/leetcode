// Source : https://leetcode.com/problems/sort-an-array/
// Author : acgotaku311
// Date   : 2021-05-01

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const radomPartition = (nums, l, r) => {
  const index = getRandomInt(l, r);
  [nums[index], nums[r]] = [nums[r], nums[index]]
  return partition(nums, l, r)
}

const partition = (nums, l, r) => {
  let count = l - 1
  for (let i = l; i < r; i++) {
    if (nums[i] <= nums[r]) {
      count++
      [nums[count], nums[i]] = [nums[i], nums[count]]
    }
  }
  [nums[count + 1], nums[r]] = [nums[r], nums[count + 1]]
  return count + 1
}

const quickSort = (nums, l, r) => {
  if (l < r) {
    const pos = radomPartition(nums, l, r)
    quickSort(nums, l, pos - 1)
    quickSort(nums, pos + 1, r)
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function (nums) {
  quickSort(nums, 0, nums.length - 1)
  return nums
}

export { sortArray }
