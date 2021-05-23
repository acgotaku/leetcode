import { checkZeroOnes } from './checkZeroOnes'

describe('checkZeroOnes', function () {
  it('test case 1', function () {
    const s = '1101'

    const result = true
    expect(checkZeroOnes(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '111000'

    const result = false
    expect(checkZeroOnes(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '110100010'

    const result = false
    expect(checkZeroOnes(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = '00011'

    const result = false
    expect(checkZeroOnes(s)).toEqual(result)
  })
  it('test case 5', function () {
    const s = '1'

    const result = true
    expect(checkZeroOnes(s)).toEqual(result)
  })
  it('test case 6', function () {
    const s = '0'

    const result = false
    expect(checkZeroOnes(s)).toEqual(result)
  })
})
