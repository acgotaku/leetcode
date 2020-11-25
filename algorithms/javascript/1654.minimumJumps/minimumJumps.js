// Source : https://leetcode.com/problems/minimum-jumps-to-reach-home/
// Author : acgotaku311
// Date   : 2020-11-24

/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
const minimumJumps = function (forbidden, a, b, x) {
  const max = a + b + 2001
  let step = 0
  const visited = {}
  forbidden.forEach(el => {
    visited[el] = true
  })
  const queue = []
  queue.push({
    pos: 0,
    dir: 'r'
  })
  while (queue.length > 0) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const current = queue.shift()
      visited[current] = true
      if (current.pos === x) {
        return step
      }
      const right = current.pos + a
      const left = current.pos - b
      if (right <= max && visited[right] !== true) {
        queue.push({
          pos: right,
          dir: 'r'
        })
        visited[right] = true
      }
      if (current.dir === 'r') {
        if (left >= 0 && visited[left] !== true) {
          queue.push({
            pos: left,
            dir: 'l'
          })
        }
      }
    }
    step++
  }
  return -1
}

export { minimumJumps }
