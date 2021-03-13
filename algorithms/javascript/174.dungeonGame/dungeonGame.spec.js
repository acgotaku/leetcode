import { calculateMinimumHP } from './dungeonGame'

describe('calculateMinimumHP', function () {
  it('test case 1', function () {
    const dungeon = [
      [-2, -3, 3],
      [-5, -10, 1],
      [10, 30, -5]
    ]
    const result = 7

    expect(calculateMinimumHP(dungeon)).toEqual(result)
  })
})
