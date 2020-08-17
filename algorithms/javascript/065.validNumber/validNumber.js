// Source : https://leetcode.com/problems/valid-number/
// Author : acgotaku311
// Date   : 2020-08-17

/** ********************************************************************************
*
* Validate if a given string is numeric.
*
* Some examples:
* "0" => true
* "   0.1  " => true
* "abc" => false
* "1 a" => false
* "2e10" => true
*
* Note: It is intended for the problem statement to be ambiguous.
*       You should gather all requirements up front before implementing one.
*
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function (s) {
  s = s.trim()
  if (s.length === 0) {
    return false
  }
  const isSpace = c => c === ' '
  const isNumber = c => c <= '9' && c >= '0'
  const isSign = c => (c === '+' || c === '-')
  const isDot = c => c === '.'
  const isExpo = c => c === 'e'
  let hasDot = false
  let hasExpo = false

  if (isSign(s[0])) {
    s = s.slice(1)
  }
  for (let i = 0; i < s.length; i++) {
    const current = s[i]
    if (isSpace(current)) {
      return false
    }
    if (isDot(current)) {
      if (hasExpo || hasDot) {
        return false
      }
      if (i === 0 && !isNumber(s[i + 1])) {
        return false
      }
      hasDot = true
      continue
    }

    if (isExpo(current)) {
      if (hasExpo || i === 0) {
        return false
      }
      i++
      if (isSign(s[i])) {
        i++
      }
      if (!isNumber(s[i])) {
        return false
      }
      hasExpo = true
      continue
    }

    if (!isNumber(current)) {
      return false
    }
  }
  return true
}

export { isNumber }
