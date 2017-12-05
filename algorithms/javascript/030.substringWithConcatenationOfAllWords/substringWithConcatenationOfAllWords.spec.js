import { findSubstring } from './substringWithConcatenationOfAllWords'

describe('substringWithConcatenationOfAllWords', function () {
  it('substringWithConcatenationOfAllWords', function () {
    const s = 'barfoothefoobarman'
    const words = ['foo', 'bar']
    const result = [0, 9]
    expect(findSubstring(s, words)).toEqual(result)
  })
})
