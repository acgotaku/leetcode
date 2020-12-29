import { eatenApples } from './eatenApples'

describe('halvesAreAlike', function () {
  it('test case 1', function () {
    const apples = [1, 2, 3, 5, 2]
    const days = [3, 2, 1, 4, 2]

    const result = 7

    expect(eatenApples(apples, days)).toEqual(result)
  })
  it('test case 2', function () {
    const apples = [3, 0, 0, 0, 0, 2]
    const days = [3, 0, 0, 0, 0, 2]

    const result = 5

    expect(eatenApples(apples, days)).toEqual(result)
  })
})
