import { maximalRectangle } from './maximalRectangle'

describe('maximalRectangle', function () {
  it('test case 1', function () {
    const matrix = [
      ['1', '0', '1', '0', '0'],
      ['1', '0', '1', '1', '1'],
      ['1', '1', '1', '1', '1'],
      ['1', '0', '0', '1', '0']
    ]
    const result = 6
    expect(maximalRectangle(matrix)).toEqual(result)
  })
  it('test case 2', function () {
    const matrix = []
    const result = 0
    expect(maximalRectangle(matrix)).toEqual(result)
  })
  it('test case 3', function () {
    const matrix = [[]]
    const result = 0
    expect(maximalRectangle(matrix)).toEqual(result)
  })
})
