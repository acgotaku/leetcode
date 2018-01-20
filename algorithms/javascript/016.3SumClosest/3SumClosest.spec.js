import { threeSumClosest } from './3SumClosest'

describe('threeSumClosest', function () {
  it('threeSumClosest test case 1', function () {
    const s = [-1, 2, 1, -4]
    const target = 1
    const result = 2
    expect(threeSumClosest(s, target)).toEqual(result)
  })
})
