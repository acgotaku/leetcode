import { grayCode, grayCode2 } from './grayCode'

describe('grayCode', function () {
  it('test case 1', function () {
    const n = 2
    const result = [0, 1, 3, 2]
    expect(grayCode(n)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 0
    const result = [0]
    expect(grayCode(n)).toEqual(result)
  })
  it('test case 3', function () {
    const n = 3
    const result = [0, 1, 3, 2, 6, 7, 5, 4]
    expect(grayCode2(n)).toEqual(result)
  })
})
