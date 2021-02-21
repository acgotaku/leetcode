import { mergeAlternately } from './mergeAlternately'

describe('mergeAlternately', function () {
  it('test case 1', function () {
    const word1 = 'abc'
    const word2 = 'pqr'
    const result = 'apbqcr'
    expect(mergeAlternately(word1, word2)).toEqual(result)
  })
  it('test case 2', function () {
    const word1 = 'ab'
    const word2 = 'pqrs'
    const result = 'apbqrs'
    expect(mergeAlternately(word1, word2)).toEqual(result)
  })
  it('test case 3', function () {
    const word1 = 'abcd'
    const word2 = 'pq'
    const result = 'apbqcd'
    expect(mergeAlternately(word1, word2)).toEqual(result)
  })
})
