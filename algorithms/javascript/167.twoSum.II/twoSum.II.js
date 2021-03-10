// Source : https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Author : acgotaku311
// Date   : 2021-03-10

/** ********************************************************************************
*
* Given an array of integers that is already sorted in ascending order,
* find two numbers such that they add up to a specific target number.
*
* The function twoSum should return indices of the two numbers such that they add up to the target,
* where index1 must be less than index2. Please note that your returned answers (both index1 and index2)
* are not zero-based.
*
* You may assume that each input would have exactly one solution.
*
* Input: numbers={2, 7, 11, 15}, target=9
* Output: index1=1, index2=2
*
**********************************************************************************/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let i = 0
  let j = numbers.length - 1
  while (i < j) {
    const sum = numbers[i] + numbers[j]
    if (sum === target) {
      return [i + 1, j + 1]
    } else if (sum > target) {
      j--
    } else {
      i++
    }
  }
}
export { twoSum }
