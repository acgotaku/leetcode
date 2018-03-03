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
  let count = -1

  const getStateVal = (board) => {
    let val = 0
    for (let i = row - 1; i >= 0; i--) {
      for (let j = col - 1; j >= 0; j--) {
        val = val << 1
        val = val | board[i][j]
      }
    }
    return val
  }

  const getNextStateVal = (curState, i, j) => {
    let nextState = curState
    const near = [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]

    near.forEach((point) => {
      let [offsetX, offsetY] = point
      let [x, y] = [i + offsetX, j + offsetY]
      if (x >= 0 && x < row && y >= 0 && y < col) {
        const index = x * col + y
        nextState = nextState ^ (1 << index)
      }
    })
    return nextState
  }
  const startState = getStateVal(board)
  const queue = [startState]
  const visited = {}
  visited[startState] = true
  while (queue.length > 0) {
    count += 1
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const state = queue.shift()
      if (state === 0) {
        return count
      } else {
        for (let i = 0; i < row; i++) {
          for (let j = 0; j < col; j++) {
            const newState = getNextStateVal(state, i, j)
            if (!visited[newState]) {
              queue.push(newState)
              visited[newState] = true
            }
          }
        }
      }
    }
  }
  return -1
}

export { solveLightsOut }
