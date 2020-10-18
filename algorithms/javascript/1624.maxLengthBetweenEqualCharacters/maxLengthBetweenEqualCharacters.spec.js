import { maxLengthBetweenEqualCharacters } from './maxLengthBetweenEqualCharacters'

describe('maxLengthBetweenEqualCharacters', function () {
  it('test case 1', function () {
    const s = 'aa'
    const result = 0

    expect(maxLengthBetweenEqualCharacters(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'abca'
    const result = 2

    expect(maxLengthBetweenEqualCharacters(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'cbzxy'
    const result = -1

    expect(maxLengthBetweenEqualCharacters(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = 'cabbac'
    const result = 4

    expect(maxLengthBetweenEqualCharacters(s)).toEqual(result)
  })
})
