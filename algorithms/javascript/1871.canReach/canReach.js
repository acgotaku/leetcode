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
  if (s[len - 1] === '1') {
    return false
  }

  const queue = []
  queue.push(0)
  while (queue.length > 0) {
    const index = queue.pop()
    const minIndex = index + minJump
    const maxIndex = Math.min(index + maxJump, len - 1)
    for (let i = maxIndex; i >= minIndex; i--) {
      if (s[i] === '0') {
        queue.push(i)
      }
      if (i === len - 1) {
        return true
      }
    }
  }

  return false
}
export { canReach }
