// Source : https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
// Author : acgotaku311
// Date   : 2021-02-24

/**
 * @param {string} time
 * @return {string}
 */
const maximumTime = function (time) {
  const len = time.length
  const arr = []
  for (let i = 0; i < len; i++) {
    const char = time[i]
    if (char === '?') {
      if (i === 0) {
        if (time[i + 1] <= '3' || time[i + 1] === '?') {
          arr[i] = '2'
        } else {
          arr[i] = '1'
        }
      } else if (i === 1) {
        if (time[i - 1] === '2' || time[i - 1] === '?') {
          arr[i] = '3'
        } else {
          arr[i] = '9'
        }
      } else if (i === 3) {
        arr[i] = '5'
      } else {
        arr[i] = '9'
      }
    } else {
      arr[i] = time[i]
    }
  }
  return arr.join('')
}

export { maximumTime }
