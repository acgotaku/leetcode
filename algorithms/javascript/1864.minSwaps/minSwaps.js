// Source : https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/
// Author : acgotaku311
// Date   : 2021-05-20

/**
 * @param {string} s
 * @return {number}
 */
const minSwaps = function (s) {
  let count0 = 0
  let count1 = 0
  let result = Number.MAX_VALUE
  const len = s.length
  for (let i = 0; i < len; i++) {
    if (s[i] === '0') {
      count0++
    } else if (s[i] === '1') {
      count1++
    }
  }

  // 1010...
  if (count1 === Number.parseInt((len + 1) / 2) && count0 === Number.parseInt(len / 2)) {
    let diff = 0
    for (let i = 0; i < len; i++) {
      if (s[i] === (i % 2).toString()) {
        diff++
      }
    }
    result = Math.min(diff / 2, result)
  }

  // 010101
  if (count1 === Number.parseInt(len / 2) && count0 === Number.parseInt((len + 1) / 2)) {
    let diff = 0
    for (let i = 0; i < len; i++) {
      if (s[i] !== (i % 2).toString()) {
        diff++
      }
    }
    result = Math.min(diff / 2, result)
  }

  if (result === Number.MAX_VALUE) {
    return -1
  } else {
    return result
  }
}
export { minSwaps }
