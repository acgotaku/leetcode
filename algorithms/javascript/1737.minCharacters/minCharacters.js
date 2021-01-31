// Source : https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/
// Author : acgotaku311
// Date   : 2021-01-24

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
const minCharacters = function (a, b) {
  const op1 = (a, b) => {
    let res = Number.MAX_SAFE_INTEGER
    for (let i = 1; i < 26; i++) {
      let count = 0
      const aArr = a.split('')
      const bArr = b.split('')
      for (const char of aArr) {
        if (char.charCodeAt(0) - 'a'.charCodeAt(0) >= i) {
          count++
        }
      }
      for (const char of bArr) {
        if (char.charCodeAt(0) - 'a'.charCodeAt(0) < i) {
          count++
        }
      }
      res = Math.min(res, count)
    }
    return res
  }

  const op2 = (a, b) => {
    const dict = {}
    const aArr = a.split('')
    const bArr = b.split('')
    for (const char of aArr) {
      if (dict[char]) {
        dict[char]++
      } else {
        dict[char] = 1
      }
    }
    for (const char of bArr) {
      if (dict[char]) {
        dict[char]++
      } else {
        dict[char] = 1
      }
    }
    const maxLen = 0
    for (const key in dict) {
      Math.max(maxLen, dict[key])
    }
    return a.length + b.length - maxLen
  }

  return Math.min(op1(a, b), op1(b, a), op2(a, b))
}

export { minCharacters }
