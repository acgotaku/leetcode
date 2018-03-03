import { longestCommonPrefix } from './longestCommonPrefix'

describe('longestCommonPrefix', function () {
  it('longestCommonPrefix test case 1', function () {
    const s = ['abab', 'aba', 'abc']
    expect(longestCommonPrefix(s)).toEqual('ab')
  })
})
