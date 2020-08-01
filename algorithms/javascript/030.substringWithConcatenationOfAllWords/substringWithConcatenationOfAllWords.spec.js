import { findSubstring } from './substringWithConcatenationOfAllWords'

describe('substringWithConcatenationOfAllWords', function () {
  it('substringWithConcatenationOfAllWords test case 1', function () {
    const s = 'barfoothefoobarman'
    const words = ['foo', 'bar']
    const result = [0, 9]
    expect(findSubstring(s, words)).toEqual(result)
  })
  it('substringWithConcatenationOfAllWords test case 2', function () {
    const s = 'barfoothefoobarman'
    const words = []
    const result = []
    expect(findSubstring(s, words)).toEqual(result)
  })
  it('substringWithConcatenationOfAllWords test case 3', function () {
    const s = 'barbarfoofoobar'
    const words = ['foo', 'bar']
    const result = [3, 9]
    expect(findSubstring(s, words)).toEqual(result)
  })
  it('substringWithConcatenationOfAllWords test case 4', function () {
    const s = 'foobarbarfoofoobar'
    const words = ['foo', 'bar', 'foo']
    const result = [6, 9]
    expect(findSubstring(s, words)).toEqual(result)
  })
})
