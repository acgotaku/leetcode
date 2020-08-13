import { Interval, insert } from './insertInterval'

describe('insert', function () {
  it('insert test case 1', function () {
    const intervals = [
      [1, 3],
      [6, 9]
    ].map(item => new Interval(item[0], item[1]))
    const newInterval = new Interval(2, 5)
    const result = [
      [1, 5],
      [6, 9]
    ].map(item => new Interval(item[0], item[1]))
    expect(insert(intervals, newInterval)).toEqual(result)
  })
  it('insert test case 2', function () {
    const intervals = [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16]
    ].map(item => new Interval(item[0], item[1]))
    const newInterval = new Interval(4, 8)
    const result = [
      [1, 2],
      [3, 10],
      [12, 16]
    ].map(item => new Interval(item[0], item[1]))
    expect(insert(intervals, newInterval)).toEqual(result)
  })
})
