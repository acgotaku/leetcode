import { solve } from './surroundedRegions'

describe('sumNumbers', function () {
  it('test case 1', function () {
    const board = [
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'O', 'X'],
      ['X', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'X']
    ]
    const result = [
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'X']
    ]
    solve(board)
    expect(board).toEqual(result)
  })
  it('test case 2', function () {
    const board = []
    const result = []
    solve(board)
    expect(board).toEqual(result)
  })
  it('test case 3', function () {
    const board = [
      'O',
      'X',
      'O'
    ]
    const result = [
      'O',
      'X',
      'O'
    ]
    solve(board)
    expect(board).toEqual(result)
  })
  it('test case 4', function () {
    const board = [
      ['X', 'X', 'X', 'O'],
      ['X', 'O', 'O', 'X'],
      ['O', 'X', 'O', 'X'],
      ['X', 'O', 'X', 'O']
    ]
    const result = [
      ['X', 'X', 'X', 'O'],
      ['X', 'X', 'X', 'X'],
      ['O', 'X', 'X', 'X'],
      ['X', 'O', 'X', 'O']
    ]
    solve(board)
    expect(board).toEqual(result)
  })
  it('test case 5', function () {
    const board = [
      ['X', 'X', 'X', 'X'],
      ['O', 'O', 'O', 'X'],
      ['X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'X']
    ]
    const result = [
      ['X', 'X', 'X', 'X'],
      ['O', 'O', 'O', 'X'],
      ['X', 'O', 'X', 'O'],
      ['X', 'O', 'X', 'X']
    ]
    solve(board)
    expect(board).toEqual(result)
  })
})
