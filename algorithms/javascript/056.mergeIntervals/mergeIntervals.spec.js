import { Interval, merge } from './mergeIntervals'

describe('merge', function () {
  it('merge test case 1', function () {
    const intervals = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
    ].map(item => new Interval(item[0], item[1]))
    const result = [
      [1, 6],
      [8, 10],
      [15, 18]
    ].map(item => new Interval(item[0], item[1]))
    expect(merge(intervals)).toEqual(result)
  })
})
