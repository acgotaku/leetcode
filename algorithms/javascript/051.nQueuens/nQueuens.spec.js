import { solveNQueens } from './nQueuens'

describe('solveNQueens', function () {
  it('solveNQueens test case 1', function () {
    const n = 4
    const result = [
      ['.Q..',
        '...Q',
        'Q...',
        '..Q.'],

      ['..Q.',
        'Q...',
        '...Q',
        '.Q..']
    ]
    expect(solveNQueens(n)).toEqual(result)
  })
  it('solveNQueens test case 2', function () {
    const n = 0
    const result = []
    expect(solveNQueens(n)).toEqual(result)
  })
  it('solveNQueens test case 3', function () {
    const n = 1
    const result = [
      ['Q']
    ]
    expect(solveNQueens(n)).toEqual(result)
  })
})
