import { longestValidParentheses } from './longestValidParentheses'

describe('longestValidParentheses', function () {
  it('longestValidParentheses test case 1', function () {
    const s = '(()'
    expect(longestValidParentheses(s)).toEqual(2)
  })

  it('longestValidParentheses test case 2', function () {
    const s = ')()())'
    expect(longestValidParentheses(s)).toEqual(4)
  })
  it('longestValidParentheses test case 3', function () {
    const s = '()()()'
    expect(longestValidParentheses(s)).toEqual(6)
  })
})
