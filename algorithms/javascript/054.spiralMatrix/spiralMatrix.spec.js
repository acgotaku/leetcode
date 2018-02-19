import { spiralOrder } from './spiralMatrix'

describe('spiralOrder', function () {
  it('spiralOrder test case 1', function () {
    const matrix = [
      [ 1, 2, 3 ],
      [ 4, 5, 6 ],
      [ 7, 8, 9 ]
    ]
    const result = [1, 2, 3, 6, 9, 8, 7, 4, 5]
    expect(spiralOrder(matrix)).toEqual(result)
  })

  it('spiralOrder test case 2', function () {
    const matrix = [
      [2, 5, 8],
      [4, 0, -1]
    ]
    const result = [2, 5, 8, -1, 0, 4]
    expect(spiralOrder(matrix)).toEqual(result)
  })
})
