// Source : https://leetcode.com/problems/find-the-winner-of-the-circular-game/
// Author : acgotaku311
// Date   : 2021-04-11

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findTheWinner = function (n, k) {
  const game = new Array(n).fill(0)
  for (let i = 1; i <= n; i++) {
    game[i - 1] = i
  }
  let start = 0
  while (game.length > 1) {
    const index = (start + k - 1) % game.length
    game.splice(index, 1)
    start = index
  }
  return game.pop()
}
export { findTheWinner }
