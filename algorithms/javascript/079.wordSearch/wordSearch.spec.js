import { exist } from './wordSearch'

describe('exist', function () {
  it('test case 1', function () {
    const board =
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]
    const word = 'ABCCED'
    expect(exist(board, word)).toEqual(true)
  })
  it('test case 2', function () {
    const board =
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]
    const word = 'SEE'
    expect(exist(board, word)).toEqual(true)
  })
  it('test case 3', function () {
    const board =
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E']
    ]
    const word = 'ABCB'
    expect(exist(board, word)).toEqual(false)
  })
  it('test case 4', function () {
    const board =
    [
      ['a']
    ]
    const word = 'a'
    expect(exist(board, word)).toEqual(true)
  })
})
