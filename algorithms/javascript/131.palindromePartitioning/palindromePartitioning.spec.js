import { partition } from './palindromePartitioning'

describe('sumNumbers', function () {
  it('test case 1', function () {
    const s = 'aab'
    const result = [['a', 'a', 'b'], ['aa', 'b']]
    expect(partition(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'a'
    const result = [['a']]
    expect(partition(s)).toEqual(result)
  })
})
