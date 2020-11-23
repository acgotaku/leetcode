// Source : https://leetcode.com/problems/ways-to-make-a-fair-array/
// Author : acgotaku311
// Date   : 2020-11-23

/**
 * @param {number[]} nums
 * @return {number}
 */

const waysToMakeFair = function (nums) {
  let result = 0
  let sumEven = 0
  let sumOdd = 0
  nums.forEach((el, i) => {
    if (i % 2 === 0) {
      sumEven += el
    } else {
      sumOdd += el
    }
  })
  let currentEven = 0
  let currentOdd = 0
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      if (currentEven + sumOdd - currentOdd === currentOdd + sumEven - currentEven - nums[i]) {
        result++
      }
      currentEven += nums[i]
    } else {
      if (currentEven + sumOdd - currentOdd - nums[i] === currentOdd + sumEven - currentEven) {
        result++
      }
      currentOdd += nums[i]
    }
  }
  return result
}
export { waysToMakeFair }
