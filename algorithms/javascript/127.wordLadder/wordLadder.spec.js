import { ladderLength } from './wordLadder'

describe('ladderLength', function () {
  it('test case 1', function () {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
    const result = 5
    expect(ladderLength(beginWord, endWord, wordList)).toEqual(result)
  })
  it('test case 2', function () {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log']
    const result = 0
    expect(ladderLength(beginWord, endWord, wordList)).toEqual(result)
  })
})
