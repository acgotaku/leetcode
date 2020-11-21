// Source : https://leetcode.com/problems/slowest-key/
// Author : acgotaku311
// Date   : 2020-10-25

/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = function (releaseTimes, keysPressed) {
  const dict = {}
  let maxDuration = -1
  let maxKey = null
  const len = releaseTimes.length
  for (let i = 0; i < len; i++) {
    const key = keysPressed[i]
    if (i > 0) {
      const duration = releaseTimes[i] - releaseTimes[i - 1]
      if (dict[key]) {
        dict[key] = Math.max(duration, dict[key])
      } else {
        dict[key] = duration
      }
    } else {
      dict[key] = releaseTimes[i]
    }
  }
  const keys = Object.keys(dict).sort()
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (dict[key] >= maxDuration) {
      maxDuration = dict[key]
      maxKey = key
    }
  }
  return maxKey
}

export { slowestKey }
