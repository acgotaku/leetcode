import { isPalindrome } from './validPalindrome'

describe('isPalindrome', function () {
  it('test case 1', function () {
    const s = 'A man, a plan, a canal: Panama'
    const result = true
    expect(isPalindrome(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'race a car'
    const result = false
    expect(isPalindrome(s)).toEqual(result)
  })
})
