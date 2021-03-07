import { checkOnesSegment } from './checkOnesSegment'

describe('checkOnesSegment', function () {
  it('test case 1', function () {
    const s = '1001'

    const result = false
    expect(checkOnesSegment(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '110'

    const result = true
    expect(checkOnesSegment(s)).toEqual(result)
  })
})
