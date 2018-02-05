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
})
