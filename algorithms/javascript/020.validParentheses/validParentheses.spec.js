import { isValid } from './validParentheses'

describe('isValid', function () {
  it('isValid test case 1', function () {
    const s = '()[]{}'
    expect(isValid(s)).toEqual(true)
  })
  it('isValid test case 2', function () {
    const s = '([)]'
    expect(isValid(s)).toEqual(false)
  })
})
