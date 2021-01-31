import { countBalls } from './countBalls'

describe('countBalls', function () {
  it('test case 1', function () {
    const lowLimit = 1
    const highLimit = 10
    const result = 2
    expect(countBalls(lowLimit, highLimit)).toEqual(result)
  })
  it('test case 2', function () {
    const lowLimit = 5
    const highLimit = 15
    const result = 2
    expect(countBalls(lowLimit, highLimit)).toEqual(result)
  })
  it('test case 2', function () {
    const lowLimit = 19
    const highLimit = 28
    const result = 2
    expect(countBalls(lowLimit, highLimit)).toEqual(result)
  })
})
