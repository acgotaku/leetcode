import { solveSudoku } from './sudokuSolver'

describe('isValidSudoku', function () {
  it('isValidSudoku test case 1', function () {
    const board = [
      ['.', '.', '9', '7', '4', '8', '.', '.', '.'],
      ['7', '.', '.', '.', '.', '.', '.', '.', '.'],
      ['.', '2', '.', '1', '.', '9', '.', '.', '.'],
      ['.', '.', '7', '.', '.', '.', '2', '4', '.'],
      ['.', '6', '4', '.', '1', '.', '5', '9', '.'],
      ['.', '9', '8', '.', '.', '.', '3', '.', '.'],
      ['.', '.', '.', '8', '.', '3', '.', '2', '.'],
      ['.', '.', '.', '.', '.', '.', '.', '.', '6'],
      ['.', '.', '.', '2', '7', '5', '9', '.', '.']
    ]
    const result = [
      ['5', '1', '9', '7', '4', '8', '6', '3', '2'],
      ['7', '8', '3', '6', '5', '2', '4', '1', '9'],
      ['4', '2', '6', '1', '3', '9', '8', '7', '5'],
      ['3', '5', '7', '9', '8', '6', '2', '4', '1'],
      ['2', '6', '4', '3', '1', '7', '5', '9', '8'],
      ['1', '9', '8', '5', '2', '4', '3', '6', '7'],
      ['9', '7', '5', '8', '6', '3', '1', '2', '4'],
      ['8', '3', '2', '4', '9', '1', '7', '5', '6'],
      ['6', '4', '1', '2', '7', '5', '9', '8', '3']
    ]
    solveSudoku(board)
    expect(board).toEqual(result)
  })
})
