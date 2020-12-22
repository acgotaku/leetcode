import { findLadders } from './wordLadder.II'

describe('findLadders', function () {
  it('test case 1', function () {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
    const result = [
      ['hit', 'hot', 'dot', 'dog', 'cog'],
      ['hit', 'hot', 'lot', 'log', 'cog']
    ]
    expect(findLadders(beginWord, endWord, wordList)).toEqual(result)
  })
  it('test case 2', function () {
    const beginWord = 'hit'
    const endWord = 'cog'
    const wordList = ['hot', 'dot', 'dog', 'lot', 'log']
    const result = []
    expect(findLadders(beginWord, endWord, wordList)).toEqual(result)
  })
  it('test case 3', function () {
    const beginWord = 'a'
    const endWord = 'c'
    const wordList = ['a', 'b', 'c']
    const result = [
      ['a', 'c']
    ]
    expect(findLadders(beginWord, endWord, wordList)).toEqual(result)
  })
  it('test case 4', function () {
    const beginWord = 'red'
    const endWord = 'tax'
    const wordList = ['ted', 'tex', 'red', 'tax', 'tad', 'den', 'rex', 'pee']
    const result = [
      ['red', 'ted', 'tad', 'tax'],
      ['red', 'ted', 'tex', 'tax'],
      ['red', 'rex', 'tex', 'tax']
    ]
    expect(findLadders(beginWord, endWord, wordList)).toEqual(result)
  })
})
