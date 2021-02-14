import { minOperations } from './minOperations'

describe('check', function () {
  it('test case 1', function () {
    const s = '0100'
    const result = 1
    expect(minOperations(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '10'
    const result = 0
    expect(minOperations(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '1111'
    const result = 2
    expect(minOperations(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = '10010100'
    const result = 3
    expect(minOperations(s)).toEqual(result)
  })
})
