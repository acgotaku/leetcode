import { getRow } from './pascalTriangle.II'

describe('getRow', function () {
  it('test case 1', function () {
    const numRows = 3
    const result = [1, 3, 3, 1]
    expect(getRow(numRows)).toEqual(result)
  })
})
