import { largestMerge } from './largestMerge'

describe('check', function () {
  it('test case 1', function () {
    const word1 = 'cabaa'
    const word2 = 'bcaaa'
    const result = 'cbcabaaaaa'
    expect(largestMerge(word1, word2)).toEqual(result)
  })
  it('test case 2', function () {
    const word1 = 'abcabc'
    const word2 = 'abdcaba'
    const result = 'abdcabcabcaba'
    expect(largestMerge(word1, word2)).toEqual(result)
  })
  it('test case 3', function () {
    const word1 = 'guguuuuuuuuuuuuuuguguuuuguug'
    const word2 = 'gguggggggguuggguugggggg'
    const result = 'guguuuuuuuuuuuuuuguguuuuguugguggggggguuggguuggggggg'
    expect(largestMerge(word1, word2)).toEqual(result)
  })
  it('test case 4', function () {
    const word1 = 'uuurr'
    const word2 = 'urrr'
    const result = 'uuuurrrrr'
    expect(largestMerge(word1, word2)).toEqual(result)
  })
})
