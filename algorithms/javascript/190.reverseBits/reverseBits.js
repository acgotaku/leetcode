// Source : https://leetcode.com/problems/rotate-array/
// Author : acgotaku311
// Date   : 2021-03-16

/** ********************************************************************************
*
* Reverse bits of a given 32 bits unsigned integer.
*
* For example, given input 43261596 (represented in binary as 00000010100101000001111010011100),
* return 964176192 (represented in binary as 00111001011110000010100101000000).
*
* Follow up:
* If this function is called many times, how would you optimize it?
*
* Related problem: Reverse Integer
*
*
**********************************************************************************/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let binaryStr = n.toString(2)
  binaryStr = binaryStr.padStart(32, '0')
  const result = binaryStr.split('').reverse().join('')
  return Number.parseInt(result, 2)
}
export { reverseBits }
