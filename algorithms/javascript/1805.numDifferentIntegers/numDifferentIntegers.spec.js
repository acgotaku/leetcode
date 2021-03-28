import { numDifferentIntegers } from './numDifferentIntegers'

describe('numDifferentIntegers', function () {
  it('test case 1', function () {
    const word = 'a123bc34d8ef34'

    const result = 3
    expect(numDifferentIntegers(word)).toEqual(result)
  })
  it('test case 2', function () {
    const word = 'leet1234code234'

    const result = 2
    expect(numDifferentIntegers(word)).toEqual(result)
  })
  it('test case 3', function () {
    const word = 'a1b01c001'

    const result = 1
    expect(numDifferentIntegers(word)).toEqual(result)
  })
})
