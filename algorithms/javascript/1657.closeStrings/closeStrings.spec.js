import { closeStrings } from './closeStrings'

describe('closeStrings', function () {
  it('test case 1', function () {
    const word1 = 'abc'
    const word2 = 'bca'

    expect(closeStrings(word1, word2)).toEqual(true)
  })
  it('test case 2', function () {
    const word1 = 'a'
    const word2 = 'aa'

    expect(closeStrings(word1, word2)).toEqual(false)
  })
  it('test case 3', function () {
    const word1 = 'cabbba'
    const word2 = 'abbccc'

    expect(closeStrings(word1, word2)).toEqual(true)
  })
  it('test case 4', function () {
    const word1 = 'cabbba'
    const word2 = 'aabbss'

    expect(closeStrings(word1, word2)).toEqual(false)
  })
  it('test case 5', function () {
    const word1 = 'abbzzca'
    const word2 = 'babzzcz'

    expect(closeStrings(word1, word2)).toEqual(false)
  })
})
