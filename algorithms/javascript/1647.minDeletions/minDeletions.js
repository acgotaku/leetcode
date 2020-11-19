// Source : https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/
// Author : acgotaku311
// Date   : 2020-11-19

/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = function (s) {
  const dict = {}
  for (let i = 0; i < s.length; i++) {
    const alphabet = s[i]
    if (dict[alphabet]) {
      dict[alphabet]++
    } else {
      dict[alphabet] = 1
    }
  }
  const values = Object.values(dict).sort()
  const dup = []
  const checked = {}
  checked[values[0]] = true
  for (let i = 0; i < values.length - 1; i++) {
    if (values[i] === values[i + 1]) {
      dup.push(values[i])
    }
    checked[values[i + 1]] = true
  }
  let step = 0
  while (dup.length > 0) {
    let el = dup.shift()
    while (el > 0) {
      el--
      step++
      if (el > 0 && checked[el] !== true) {
        checked[el] = true
        break
      }
    }
  }
  return step
}

export { minDeletions }
