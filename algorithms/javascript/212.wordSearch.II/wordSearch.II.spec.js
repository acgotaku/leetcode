import { findWords } from './wordSearch.II'

describe('findWords', function () {
  it('test case 1', function () {
    const board = [['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']]
    const words = ['oath', 'pea', 'eat', 'rain']

    const result = ['eat', 'oath']
    expect(findWords(board, words).sort()).toEqual(result.sort())
  })
  it('test case 2', function () {
    const board = [['a', 'b'], ['c', 'd']]
    const words = ['abcb']

    const result = []
    expect(findWords(board, words).sort()).toEqual(result.sort())
  })
  it('test case 3', function () {
    const board = [['o', 'a', 'b', 'n'], ['o', 't', 'a', 'e'], ['a', 'h', 'k', 'r'], ['a', 'f', 'l', 'v']]
    const words = ['oa', 'oaa']

    const result = ['oa', 'oaa']
    expect(findWords(board, words).sort()).toEqual(result.sort())
  })
})
