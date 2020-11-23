import { arrayStringsAreEqual } from './arrayStringsAreEqual'

describe('arrayStringsAreEqual', function () {
  it('test case 1', function () {
    const word1 = ['ab', 'c']
    const word2 = ['a', 'bc']
    const result = true

    expect(arrayStringsAreEqual(word1, word2)).toEqual(result)
  })
  it('test case 2', function () {
    const word1 = ['a', 'cb']
    const word2 = ['ab', 'c']
    const result = false

    expect(arrayStringsAreEqual(word1, word2)).toEqual(result)
  })
  it('test case 3', function () {
    const word1 = ['abc', 'd', 'defg']
    const word2 = ['abcddefg']
    const result = true

    expect(arrayStringsAreEqual(word1, word2)).toEqual(result)
  })
})
