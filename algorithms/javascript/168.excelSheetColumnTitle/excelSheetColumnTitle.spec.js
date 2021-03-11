import { convertToTitle } from './excelSheetColumnTitle'

describe('convertToTitle', function () {
  it('test case 1', function () {
    const columnNumber = 1

    const result = 'A'

    expect(convertToTitle(columnNumber)).toEqual(result)
  })
  it('test case 2', function () {
    const columnNumber = 28

    const result = 'AB'

    expect(convertToTitle(columnNumber)).toEqual(result)
  })
  it('test case 3', function () {
    const columnNumber = 701

    const result = 'ZY'

    expect(convertToTitle(columnNumber)).toEqual(result)
  })
  it('test case 4', function () {
    const columnNumber = 2147483647

    const result = 'FXSHRXW'

    expect(convertToTitle(columnNumber)).toEqual(result)
  })
  it('test case 5', function () {
    const columnNumber = 52

    const result = 'AZ'

    expect(convertToTitle(columnNumber)).toEqual(result)
  })
})
