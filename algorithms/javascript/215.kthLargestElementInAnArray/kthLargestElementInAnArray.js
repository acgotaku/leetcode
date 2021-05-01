// Source : https://leetcode.com/problems/kth-largest-element-in-an-array/
// Author : acgotaku311
// Date   : 2021-04-29

/** ********************************************************************************
 *
 * Find the kth largest element in an unsorted array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 *
 * For example,
 * Given [3,2,1,5,6,4] and k = 2, return 5.
 *
 * Note:
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 *
 *
 **********************************************************************************/

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

const quickSelect = (nums, l, r, k) => {
  const index = radomPartition(nums, l, r)
  if (index === k) {
    return nums[index]
  } else {
    return index < k ? quickSelect(nums, index + 1, r, k) : quickSelect(nums, l, index - 1, k)
  }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, nums.length - k)
}

export { findKthLargest }
