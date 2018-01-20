import { letterCombinations } from './letterCombinationsOfAPhoneNumber'

describe('letterCombinations', function () {
  it('letterCombinations test case 1', function () {
    const s = '23'
    const result = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
    expect(letterCombinations(s)).toEqual(result)
  })
  it('letterCombinations test case 2', function () {
    const s = ''
    const result = []
    expect(letterCombinations(s)).toEqual(result)
  })
})
