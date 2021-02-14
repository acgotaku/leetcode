// Source : https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/
// Author : acgotaku311
// Date   : 2021-02-14

/**
 * @param {string} s
 * @return {number}
 */
const minOperations = function (s) {
  let count1 = 0
  let count2 = 0
  const str1 = s.split('').map(n => Number(n))
  const str2 = str1.slice()
  if (str1[0] === 1) {
    str1[0] = 0
    count1++
  }
  if (str2[0] === 0) {
    str2[0] = 1
    count2++
  }
  for (let i = 0; i < str1.length - 1; i++) {
    if (str1[i] + str1[i + 1] === 1) {
      continue
    } else {
      str1[i + 1] = 1 - str1[i + 1]
      count1++
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    if (str2[i] + str2[i + 1] === 1) {
      continue
    } else {
      str2[i + 1] = 1 - str2[i + 1]
      count2++
    }
  }
  return Math.min(count1, count2)
}

export { minOperations }
