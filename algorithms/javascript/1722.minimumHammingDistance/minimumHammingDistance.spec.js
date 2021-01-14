import { minimumHammingDistance } from './minimumHammingDistance'

describe('minimumHammingDistance', function () {
  it('test case 1', function () {
    const source = [1, 2, 3, 4]
    const target = [2, 1, 4, 5]
    const allowedSwaps = [[0, 1], [2, 3]]

    const result = 1
    expect(minimumHammingDistance(source, target, allowedSwaps)).toEqual(result)
  })
  it('test case 2', function () {
    const source = [1, 2, 3, 4]
    const target = [1, 3, 2, 4]
    const allowedSwaps = []

    const result = 2
    expect(minimumHammingDistance(source, target, allowedSwaps)).toEqual(result)
  })
  it('test case 3', function () {
    const source = [5, 1, 2, 4, 3]
    const target = [1, 5, 4, 2, 3]
    const allowedSwaps = [[0, 4], [4, 2], [1, 3], [1, 4]]

    const result = 0
    expect(minimumHammingDistance(source, target, allowedSwaps)).toEqual(result)
  })
  it('test case 4', function () {
    const source = [1, 2, 4, 4]
    const target = [1, 3, 4, 4]
    const allowedSwaps = [[2, 3]]

    const result = 1
    expect(minimumHammingDistance(source, target, allowedSwaps)).toEqual(result)
  })
})
