import { WordDictionary } from './WordDictionary'

describe('WordDictionary', function () {
  it('test case 1', function () {
    const wordDictionary = new WordDictionary()
    wordDictionary.addWord('bad')
    wordDictionary.addWord('dad')
    wordDictionary.addWord('mad')
    expect(wordDictionary.search('pad')).toEqual(false)
    expect(wordDictionary.search('bad')).toEqual(true)
    expect(wordDictionary.search('.ad')).toEqual(true)
    expect(wordDictionary.search('b..')).toEqual(true)
  })
  it('test case 2', function () {
    const wordDictionary = new WordDictionary()
    wordDictionary.addWord('a')
    expect(wordDictionary.search('a.')).toEqual(false)
  })
  it('test case 3', function () {
    const wordDictionary = new WordDictionary()
    wordDictionary.addWord('add')
    expect(wordDictionary.search('a')).toEqual(false)
  })
})
