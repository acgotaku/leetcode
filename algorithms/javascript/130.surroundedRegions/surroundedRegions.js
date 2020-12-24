// Source : https://leetcode.com/problems/surrounded-regions/
// Author : acgotaku311
// Date   : 2020-12-24

/** ********************************************************************************
*
* Given a 2D board containing 'X' and 'O', capture all regions surrounded by 'X'.
*
* A region is captured by flipping all 'O's into 'X's in that surrounded region.
*
* For example,
*
* X X X X
* X O O X
* X X O X
* X O X X
*
* After running your function, the board should be:
*
* X X X X
* X X X X
* X X X X
* X O X X
*
*
**********************************************************************************/

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  const row = board.length
  if (row <= 2) {
    return
  }
  const col = board[0].length
  if (col <= 2) {
    return
  }
  const visited = []
  const queue = []
  const getNear = ({ x, y }) => {
    const nears = []
    if (x > 0) {
      nears.push({ x: x - 1, y })
    }
    if (y > 0) {
      nears.push({ x, y: y - 1 })
    }
    if (x < row - 1) {
      nears.push({ x: x + 1, y })
    }
    if (y < col - 1) {
      nears.push({ x, y: y + 1 })
    }
    return nears
  }
  for (let i = 0; i < row; i++) {
    visited.push(new Array(col).fill(false))
  }

  // top
  for (let j = 0; j < col; j++) {
    const cell = board[0][j]
    if (cell === 'X') {
      continue
    } else {
      queue.push({ x: 0, y: j })
    }
  }
  // bottom
  for (let j = 0; j < col; j++) {
    const cell = board[row - 1][j]
    if (cell === 'X') {
      continue
    } else {
      queue.push({ x: row - 1, y: j })
    }
  }

  // left
  for (let i = 1; i < row - 1; i++) {
    const cell = board[i][0]
    if (cell === 'X') {
      continue
    } else {
      queue.push({ x: i, y: 0 })
    }
  }

  // right
  for (let i = 1; i < row - 1; i++) {
    const cell = board[i][col - 1]
    if (cell === 'X') {
      continue
    } else {
      queue.push({ x: i, y: col - 1 })
    }
  }

  while (queue.length > 0) {
    const cell = queue.pop()
    visited[cell.x][cell.y] = true
    const nears = getNear({ x: cell.x, y: cell.y })
    for (let i = 0; i < nears.length; i++) {
      const near = nears[i]
      if (board[near.x][near.y] === 'X' || visited[near.x][near.y]) {
        continue
      } else {
        queue.push(near)
      }
    }
  }

  for (let i = 1; i < row - 1; i++) {
    for (let j = 1; j < col - 1; j++) {
      if (board[i][j] === 'X' || visited[i][j]) {
        continue
      } else {
        board[i][j] = 'X'
      }
    }
  }
}

export { solve }
