import { numDecodings } from './decodeWays'

describe('numDecodings', function () {
  it('test case 1', function () {
    const s = '226'
    const result = 3
    expect(numDecodings(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '12'
    const result = 2
    expect(numDecodings(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '01'
    const result = 0
    expect(numDecodings(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = ''
    const result = 0
    expect(numDecodings(s)).toEqual(result)
  })
  it('test case 5', function () {
    const s = '1'
    const result = 1
    expect(numDecodings(s)).toEqual(result)
  })
})
