import { groupAnagrams } from './groupAnagrams'

describe('groupAnagrams', function () {
  const sort = (arr) => {
    arr = arr.map(item => item.sort())
    return arr.sort()
  }
  it('groupAnagrams test case 1', function () {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
    const result = [
      ['ate', 'eat', 'tea'],
      ['nat', 'tan'],
      ['bat']
    ]
    expect(sort(groupAnagrams(strs))).toEqual(sort(result))
  })
})
