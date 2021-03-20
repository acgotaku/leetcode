import { numIslands } from './numberOfIslands'

describe('numIslands', function () {
  it('test case 1', function () {
    const grid = [
      ['1', '1', '1', '1', '0'],
      ['1', '1', '0', '1', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '0', '0', '0']
    ]
    const result = 1
    expect(numIslands(grid)).toEqual(result)
  })
  it('test case 2', function () {
    const grid = [
      ['1', '1', '0', '0', '0'],
      ['1', '1', '0', '0', '0'],
      ['0', '0', '1', '0', '0'],
      ['0', '0', '0', '1', '1']
    ]
    const result = 3
    expect(numIslands(grid)).toEqual(result)
  })
  it('test case 3', function () {
    const grid = [
      ['1', '1', '1'],
      ['0', '1', '0'],
      ['1', '1', '1']]
    const result = 1
    expect(numIslands(grid)).toEqual(result)
  })
})
