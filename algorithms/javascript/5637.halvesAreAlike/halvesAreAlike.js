// Source : https://leetcode.com/problems/determine-if-string-halves-are-alike/
// Author : acgotaku311
// Date   : 2020-12-27

/**
 * @param {string} s
 * @return {boolean}
 */
const halvesAreAlike = function (s) {
  const len = s.length
  const dict = {}
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const a = s.substr(0, len / 2)
  const b = s.substr(len / 2)
  let aCount = 0
  let bCount = 0
  vowels.forEach(v => {
    dict[v] = true
  })
  for (let i = 0; i < a.length; i++) {
    if (dict[a[i]]) {
      aCount++
    }
  }
  for (let j = 0; j < b.length; j++) {
    if (dict[b[j]]) {
      bCount++
    }
  }
  return aCount === bCount
}

export { halvesAreAlike }
