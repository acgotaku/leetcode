import { generateParenthesis } from './generateParentheses'

describe('generateParenthesis', function () {
  it('generateParenthesis test case 1', function () {
    const n = 3
    const result = [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()'
    ]
    expect(generateParenthesis(n).sort()).toEqual(result.sort())
  })
})
