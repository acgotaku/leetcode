import { wordBreak } from './wordBreak'

describe('wordBreak', function () {
  it('test case 1', function () {
    const s = 'leetcode'
    const wordDict = ['leet', 'code']
    const result = true
    expect(wordBreak(s, wordDict)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'applepenapple'
    const wordDict = ['apple', 'pen']
    const result = true
    expect(wordBreak(s, wordDict)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'catsandog'
    const wordDict = ['cats', 'dog', 'sand', 'and', 'cat']
    const result = false
    expect(wordBreak(s, wordDict)).toEqual(result)
  })
  it('test case 4', function () {
    const s = 'aaaaaaa'
    const wordDict = ['aaaa', 'aaa']
    const result = true
    expect(wordBreak(s, wordDict)).toEqual(result)
  })
})
