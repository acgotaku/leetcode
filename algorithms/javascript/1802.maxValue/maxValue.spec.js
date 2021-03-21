import { maxValue } from './maxValue'

describe('maxValue', function () {
  it('test case 1', function () {
    const n = 4
    const index = 2
    const maxSum = 6

    const result = 2
    expect(maxValue(n, index, maxSum)).toEqual(result)
  })
  it('test case 2', function () {
    const n = 6
    const index = 1
    const maxSum = 10

    const result = 3
    expect(maxValue(n, index, maxSum)).toEqual(result)
  })
  it('test case 3', function () {
    const n = 3
    const index = 2
    const maxSum = 18

    const result = 7
    expect(maxValue(n, index, maxSum)).toEqual(result)
  })
  it('test case 4', function () {
    const n = 7
    const index = 5
    const maxSum = 30

    const result = 6
    expect(maxValue(n, index, maxSum)).toEqual(result)
  })
})
