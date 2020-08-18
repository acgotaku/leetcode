import { addBinary } from './addBinary'

describe('addBinary', function () {
  it('addBinary test case 1', function () {
    const a = '11'
    const b = '1'
    const result = '100'
    expect(addBinary(a, b)).toEqual(result)
  })
  it('addBinary test case 2', function () {
    const a = '1010'
    const b = '1011'
    const result = '10101'
    expect(addBinary(a, b)).toEqual(result)
  })
  it('addBinary test case 3', function () {
    const a = '11'
    const b = '11'
    const result = '110'
    expect(addBinary(a, b)).toEqual(result)
  })
})
