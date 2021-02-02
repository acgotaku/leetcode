import { numberOfMatches } from './numberOfMatches'

describe('numberOfMatches', function () {
  it('test case 1', function () {
    const n = 7

    const result = 6

    expect(numberOfMatches(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 14

    const result = 13

    expect(numberOfMatches(n)).toEqual(result)
  })
  it('test case 3', function () {
    const n = 1

    const result = 0

    expect(numberOfMatches(n)).toEqual(result)
  })
})
