import { totalNQueens } from './nQueuens.II'

describe('totalNQueens', function () {
  it('totalNQueens test case 1', function () {
    const n = 4
    expect(totalNQueens(n)).toEqual(2)
  })
  it('totalNQueens test case 1', function () {
    const n = 0
    expect(totalNQueens(n)).toEqual(0)
  })
  it('totalNQueens test case 1', function () {
    const n = 1
    expect(totalNQueens(n)).toEqual(1)
  })
})
