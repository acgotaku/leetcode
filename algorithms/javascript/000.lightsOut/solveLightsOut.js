// Source : http://mathworld.wolfram.com/LightsOutPuzzle.html
// Author : acgotaku311
// Date   : 2017-12-11

/**
 * @param {character[][]} board
 * @return {number}
 */
const solveLightsOut = (board) => {
  const row = board.length
  const col = board[0].length
  let count = 0
  let maxCount = row * col
  const visited = {}
  const queue = [board, []]

  const getStateVal = (board) => {
    let val = 0
    let base = 1
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        val += base * board[i][j]
        base = base * 2
      }
    }
    return val
  }
  const toggle = (value) => {
    return value === 0 ? 1 : 0
  }
  const toggleNear = (board, i, j) => {
    const newBoard = board.map(item => item.slice())
    // self
    newBoard[i][j] = toggle(newBoard[i][j])
    // top
    if (i - 1 >= 0) {
      newBoard[i - 1][j] = toggle(newBoard[i - 1][j])
    }
    // right
    if (j + 1 < col) {
      newBoard[i][j + 1] = toggle(newBoard[i][j + 1])
    }
    // bottom
    if (i + 1 < row) {
      newBoard[i + 1][j] = toggle(newBoard[i + 1][j])
    }
    // left
    if (j - 1 >= 0) {
      newBoard[i][j - 1] = toggle(newBoard[i][j - 1])
    }
    return newBoard
  }

  while (queue.length > 0) {
    const state = queue.shift()
    if (count > maxCount) {
      return -1
    }
    if (state.length === 0) {
      count++
      queue.push(state)
    } else {
      const val = getStateVal(state)
      if (val === 0) {
        return count
      } else {
        if (!visited[val]) {
          visited[val] = true
          for (let i = 0; i < row; i++) {
            for (let j = 0; j < col; j++) {
              const newState = toggleNear(state, i, j)
              queue.push(newState)
            }
          }
        }
      }
    }
  }
}

export { solveLightsOut }
