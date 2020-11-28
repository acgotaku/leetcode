import { generate } from './pascalTriangle'

describe('generate', function () {
  it('test case 1', function () {
    const numRows = 5
    const result = [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1]
    ]
    expect(generate(numRows)).toEqual(result)
  })
})
