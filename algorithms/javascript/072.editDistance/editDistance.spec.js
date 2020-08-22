import { minDistance } from './editDistance'

describe('minDistance', function () {
  it('test case 1', function () {
    const word1 = 'horse'
    const word2 = 'ros'
    expect(minDistance(word1, word2)).toEqual(3)
  })
  it('test case 2', function () {
    const word1 = 'intention'
    const word2 = 'execution'
    expect(minDistance(word1, word2)).toEqual(5)
  })
  it('test case 3', function () {
    const word1 = ''
    const word2 = 'a'
    expect(minDistance(word1, word2)).toEqual(1)
  })
})
