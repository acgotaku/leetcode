// Source : https://leetcode.com/problems/jump-game-vii/
// Author : acgotaku311
// Date   : 2021-06-02

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
const canReach = function (s, minJump, maxJump) {
  const len = s.length
  if (s === '0') {
    return true
  }
  if (s[len - 1] === '1') {
    return false
  }
  const minIndex = minJump
  const maxIndex = Math.min(maxJump, len - 1)
  for (let i = maxIndex; i >= minIndex; i--) {
    if (s[i] === '0') {
      if (canReach(s.substring(i), minJump, maxJump)) {
        return true
      }
    }
  }
  return false
}
export { canReach }
