import { maximumScore } from './maximumScore'

describe('check', function () {
  it('test case 1', function () {
    const a = 2
    const b = 4
    const c = 6
    const result = 6
    expect(maximumScore(a, b, c)).toEqual(result)
  })
  it('test case 2', function () {
    const a = 4
    const b = 4
    const c = 6
    const result = 7
    expect(maximumScore(a, b, c)).toEqual(result)
  })
  it('test case 3', function () {
    const a = 1
    const b = 8
    const c = 8
    const result = 8
    expect(maximumScore(a, b, c)).toEqual(result)
  })
  it('test case 4', function () {
    const a = 8
    const b = 16
    const c = 22
    const result = 23
    expect(maximumScore(a, b, c)).toEqual(result)
  })
  it('test case 5', function () {
    const a = 0
    const b = 0
    const c = 8
    const result = 0
    expect(maximumScore(a, b, c)).toEqual(result)
  })
  it('test case 6', function () {
    const a = 0
    const b = 1
    const c = 8
    const result = 1
    expect(maximumScore(a, b, c)).toEqual(result)
  })
})
