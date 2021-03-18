// Source : https://leetcode.com/problems/number-of-1-bits/
// Author : acgotaku311
// Date   : 2021-03-18

/** ********************************************************************************
*
* Write a function that takes an unsigned integer and returns the number of ’1' bits it has
* (also known as the Hamming weight).
*
* For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011,
* so the function should return 3.
*
*
**********************************************************************************/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
  let count = 0
  const binaryStr = n.toString(2)
  for (let i = 0; i < binaryStr.length; i++) {
    if (binaryStr[i] === '1') {
      count++
    }
  }
  return count
}
export { hammingWeight }
