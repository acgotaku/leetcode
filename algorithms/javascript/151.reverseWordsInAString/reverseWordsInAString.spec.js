import { reverseWords } from './reverseWordsInAString'

describe('reverseWords', function () {
  it('test case 1', function () {
    const s = 'the sky is blue'
    const result = 'blue is sky the'
    expect(reverseWords(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '  hello world  '
    const result = 'world hello'
    expect(reverseWords(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'a good   example'
    const result = 'example good a'
    expect(reverseWords(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = '  Bob    Loves  Alice   '
    const result = 'Alice Loves Bob'
    expect(reverseWords(s)).toEqual(result)
  })
})
