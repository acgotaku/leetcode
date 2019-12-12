import { longestCommonPrefix } from './longestCommonPrefix'

describe('longestCommonPrefix', function () {
  it('longestCommonPrefix test case 1', function () {
    const s = ['abab', 'aba', 'abc']
    expect(longestCommonPrefix(s)).toEqual('ab')
  })
  it('longestCommonPrefix test case 2', function () {
    const s = []
    expect(longestCommonPrefix(s)).toEqual('')
  })
  it('longestCommonPrefix test case 3', function () {
    const s = ['ab', 'abab']
    expect(longestCommonPrefix(s)).toEqual('ab')
  })
})
