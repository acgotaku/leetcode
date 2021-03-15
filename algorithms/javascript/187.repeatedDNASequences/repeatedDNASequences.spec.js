import { findRepeatedDnaSequences } from './repeatedDNASequences'

describe('findRepeatedDnaSequences', function () {
  it('test case 1', function () {
    const s = 'AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT'
    const result = ['AAAAACCCCC', 'CCCCCAAAAA']

    expect(findRepeatedDnaSequences(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'AAAAAAAAAAAAA'
    const result = ['AAAAAAAAAA']

    expect(findRepeatedDnaSequences(s)).toEqual(result)
  })
})
