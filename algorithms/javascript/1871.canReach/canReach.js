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
  const f = new Array(len).fill(0)
  const pre = new Array(len).fill(1)
  f[0] = 1
  for (let i = minJump; i < len; i++) {
    const left = i - maxJump
    const right = i - minJump
    if (s[i] === '0') {
      const sum = pre[right] - (left <= 0 ? 0 : pre[left - 1])
      if (sum === 0) {
        f[i] = 0
      } else {
        f[i] = 1
      }
    }
    pre[i] = pre[i - 1] + f[i]
  }

  return !!f[len - 1]
}
export { canReach }
