import { wordBreak } from './wordBreak.II'

describe('wordBreak', function () {
  it('test case 1', function () {
    const s = 'catsanddog'
    const wordDict = ['cat', 'cats', 'and', 'sand', 'dog']
    const result = [
      'cats and dog',
      'cat sand dog'
    ]
    expect(wordBreak(s, wordDict).sort()).toEqual(result.sort())
  })
  it('test case 2', function () {
    const s = 'pineapplepenapple'
    const wordDict = ['apple', 'pen', 'applepen', 'pine', 'pineapple']
    const result = [
      'pine apple pen apple',
      'pineapple pen apple',
      'pine applepen apple'
    ]
    expect(wordBreak(s, wordDict).sort()).toEqual(result.sort())
  })
  it('test case 3', function () {
    const s = 'catsandog'
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat']
    const result = []
    expect(wordBreak(s, wordDict).sort()).toEqual(result.sort())
  })
})
