import { minSpeedOnTime } from './minSpeedOnTime'

describe('minSpeedOnTime', function () {
  it('test case 1', function () {
    const dist = [1, 3, 2]
    const hour = 6

    const result = 1
    expect(minSpeedOnTime(dist, hour)).toEqual(result)
  })
  it('test case 2', function () {
    const dist = [1, 3, 2]
    const hour = 2.7

    const result = 3
    expect(minSpeedOnTime(dist, hour)).toEqual(result)
  })
  it('test case 3', function () {
    const dist = [1, 3, 2]
    const hour = 1.9

    const result = -1
    expect(minSpeedOnTime(dist, hour)).toEqual(result)
  })
  it('test case 4', function () {
    const dist = [1, 1, 100000]
    const hour = 2.01

    const result = 10000000
    expect(minSpeedOnTime(dist, hour)).toEqual(result)
  })
})
