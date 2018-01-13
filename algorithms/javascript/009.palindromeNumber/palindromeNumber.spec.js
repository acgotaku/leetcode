import { isPalindrome } from './palindromeNumber'

describe('isPalindrome', function () {
  it('isPalindrome test case 1', function () {
    const s = '123'
    expect(isPalindrome(s)).toEqual(false)
  })
  it('isPalindrome test case 2', function () {
    const s = '-123'
    expect(isPalindrome(s)).toEqual(false)
  })
  it('isPalindrome test case 3', function () {
    const s = '121'
    expect(isPalindrome(s)).toEqual(true)
  })
  it('isPalindrome test case 4', function () {
    const s = '11'
    expect(isPalindrome(s)).toEqual(true)
  })
})
