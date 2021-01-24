import { maximumTime } from './maximumTime'

describe('maximumTime', function () {
  it('test case 1', function () {
    const time = '2?:?0'
    const result = '23:50'
    expect(maximumTime(time)).toEqual(result)
  })
  it('test case 2', function () {
    const time = '0?:3?'
    const result = '09:39'
    expect(maximumTime(time)).toEqual(result)
  })
  it('test case 3', function () {
    const time = '1?:22'
    const result = '19:22'
    expect(maximumTime(time)).toEqual(result)
  })
  it('test case 4', function () {
    const time = '??:22'
    const result = '23:22'
    expect(maximumTime(time)).toEqual(result)
  })
  it('test case 4', function () {
    const time = '?9:22'
    const result = '19:22'
    expect(maximumTime(time)).toEqual(result)
  })
})
