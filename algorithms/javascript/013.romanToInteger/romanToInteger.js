// Source : https://leetcode.com/problems/roman-to-integer/description/
// Author : acgotaku311
// Date   : 2018-01-17

/**********************************************************************************
*
* Given a roman numeral, convert it to an integer.
*
* Input is guaranteed to be within the range from 1 to 3999.
*
**********************************************************************************/

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
  function romanCharToInt (ch) {
    let d = 0
    switch (ch) {
      case 'I':
        d = 1
        break
      case 'V':
        d = 5
        break
      case 'X':
        d = 10
        break
      case 'L':
        d = 50
        break
      case 'C':
        d = 100
        break
      case 'D':
        d = 500
        break
      case 'M':
        d = 1000
        break
    }
    return d
  }

  const len = s.length
  if (len <= 0) {
    return 0
  }
  let result = romanCharToInt(s[0])
  for (let i = 1; i < len; i++) {
    const prev = romanCharToInt(s[i - 1])
    const curr = romanCharToInt(s[i])
    if (prev < curr) {
      result = result - prev + (curr - prev)
    } else {
      result += curr
    }
  }

  return result
}

export { romanToInt }
