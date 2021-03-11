import { titleToNumber } from './excelSheetColumnNumber'

describe('titleToNumber', function () {
  it('test case 1', function () {
    const columnTitle = 'A'
    const result = 1

    expect(titleToNumber(columnTitle)).toEqual(result)
  })
  it('test case 2', function () {
    const columnTitle = 'AB'
    const result = 28

    expect(titleToNumber(columnTitle)).toEqual(result)
  })
  it('test case 3', function () {
    const columnTitle = 'ZY'
    const result = 701

    expect(titleToNumber(columnTitle)).toEqual(result)
  })
  it('test case 4', function () {
    const columnTitle = 'AZ'
    const result = 52

    expect(titleToNumber(columnTitle)).toEqual(result)
  })
})
