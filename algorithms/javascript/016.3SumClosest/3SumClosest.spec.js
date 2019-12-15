import { threeSumClosest } from './3SumClosest'

describe('threeSumClosest', function () {
  it('threeSumClosest test case 1', function () {
    const s = [-1, 2, 1, -4]
    const target = 1
    const result = 2
    expect(threeSumClosest(s, target)).toEqual(result)
  })
  it('threeSumClosest test case 2', function () {
    const s = [-1, 1, 1, 1]
    const target = 1
    const result = 1
    expect(threeSumClosest(s, target)).toEqual(result)
  })
  it('threeSumClosest test case 3', function () {
    const s = [1, 1, 1, 1]
    const target = 1
    const result = 3
    expect(threeSumClosest(s, target)).toEqual(result)
  })
  it('threeSumClosest test case 4', function () {
    const s = [1, 1, 1, 1]
    const target = 10
    const result = 3
    expect(threeSumClosest(s, target)).toEqual(result)
  })
})
