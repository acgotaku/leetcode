// Source : https://leetcode.com/problems/sum-of-all-subset-xor-totals/
// Author : acgotaku311
// Date   : 2021-05-18

/**
 * @param {number[]} nums
 * @return {number}
 */
const subsetXORSum = function (nums) {
  const result = []
  const DFS = (stack, start, len) => {
    if (len === start) {
      result.push(stack.slice())
      return
    }

    for (let i = start; i < len; i++) {
      stack.push(nums[i])
      DFS(stack, i + 1, len)
      stack.pop()
    }
  }

  for (let i = 0; i <= nums.length; i++) {
    DFS([], 0, i)
  }
  return result.map(item => item.reduce((acc, current) => acc ^ current, 0)).reduce((acc, current) => acc + current, 0)
}
export { subsetXORSum }
