// Source : https://leetcode.com/problems/add-binary/
// Author : acgotaku311
// Date   : 2020-08-18

/** ********************************************************************************
*
* Given two binary strings, return their sum (also a binary string).
*
* For example,
* a = "11"
* b = "1"
* Return "100".
*
*
**********************************************************************************/

const addBinary = function (a, b) {
  let aLen = a.length
  let bLen = b.length

  const sum = []
  let sign = 0

  while (aLen > 0 || bLen > 0) {
    const aBit = aLen <= 0 ? 0 : Number(a[aLen - 1])
    const bBit = bLen <= 0 ? 0 : Number(b[bLen - 1])

    const temp = aBit + bBit + sign
    if (temp >= 2) {
      sum.push(temp % 2)
      sign = 1
    } else {
      sum.push(temp)
      sign = 0
    }
    aLen--
    bLen--
  }

  if (sign) {
    sum.push(sign)
  }

  return sum.reverse().join('')
}

export { addBinary }
