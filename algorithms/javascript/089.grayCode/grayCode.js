// Source : https://leetcode.com/problems/gray-code/
// Author : acgotaku311
// Date   : 2020-09-08

/** ********************************************************************************
*
* The gray code is a binary numeral system where two successive values differ in only one bit.
*
* Given a non-negative integer n representing the total number of bits in the code,
* print the sequence of gray code. A gray code sequence must begin with 0.
*
* For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:
*
* 00 - 0
* 01 - 1
* 11 - 3
* 10 - 2
*
* Note:
* For a given n, a gray code sequence is not uniquely defined.
*
* For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.
*
* For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.
*
**********************************************************************************/

/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function (n) {
  const nums = []
  if (n === 0) {
    return [0]
  }

  const buildOne = (s, i) => {
    const arr = s.split('')
    if (i % 2 === 0) {
      for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] === '1') {
          arr[j - 1] = arr[j - 1] === '0' ? '1' : '0'
          break
        }
      }
    } else {
      arr[s.length - 1] = arr[s.length - 1] === '0' ? '1' : '0'
    }
    return arr.join('')
  }
  const count = Math.pow(2, n)
  let str = ''
  for (let i = 0; i < count; i++) {
    if (i === 0) {
      str = ''.padStart(n, '0')
    } else {
      str = buildOne(str, i)
    }
    nums.push(str)
  }
  return nums.map(num => Number.parseInt(num, 2))
}

const grayCode2 = function (n) {
  const nums = []
  const count = Math.pow(2, n)
  for (let i = 0; i < count; i++) {
    nums.push((i >> 1) ^ i)
  }
  return nums
}

export { grayCode, grayCode2 }
