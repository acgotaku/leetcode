// Source : http://mathworld.wolfram.com/LightsOutPuzzle.html
// Author : acgotaku311
// Date   : 2017-12-11

/**
 * @param {character[][]} board
 * @return {number}
 */

// gaussian elimination solution
const solveLightsOut = (board) => {
  const row = board.length
  const col = board[0].length
  const gaussian = (board, row, col) => {
    const stateList = []
    const maxCount = row * col
    const near = [
      [0, 0],
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]

    const arrayXOR = (arr1, arr2) => {
      const result = [...new Set(arr1.concat(arr2))]
      return result.map((value) => {
        if (!(arr1.includes(value) && arr2.includes(value))) {
          return value
        }
      }).filter(n => n !== undefined)
    }
    // 保存每个灯的状态
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const state = []
        near.forEach((point) => {
          const [offsetX, offsetY] = point
          const [x, y] = [i + offsetX, j + offsetY]
          if (x >= 0 && x < row && y >= 0 && y < col) {
            state.push(x * col + y)
          }
        })
        stateList.push([board[i][j], state])
      }
    }

    // 保证对角线上是1 解方程组构成上三角
    for (let i = 0; i < maxCount; i++) {
      let flag = true
      for (let j = i; j < maxCount; j++) {
        if (stateList[j][1].includes(i)) {
          [stateList[i], stateList[j]] = [stateList[j], stateList[i]]
          flag = false
          break
        }
      }
      if (flag) {
        return -1
      }

      for (let j = i + 1; j < maxCount; j++) {
        if (stateList[j][1].includes(i)) {
          stateList[j][0] = stateList[j][0] ^ stateList[i][0]
          stateList[j][1] = arrayXOR(stateList[j][1], stateList[i][1])
        }
      }
    }

    // 逆向解上三角 只有对角线有1
    for (let i = maxCount - 1; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (stateList[j][1].includes(i)) {
          stateList[j][0] = stateList[j][0] ^ stateList[i][0]
          stateList[j][1] = arrayXOR(stateList[j][1], stateList[i][1])
        }
      }
    }
    let step = 0
    stateList.forEach((item) => {
      step = step + item[0]
    })
    return step
  }
  return gaussian(board, row, col)
}

export { solveLightsOut }
