import { isIsomorphic } from './isomorphicStrings'

describe('isIsomorphic', function () {
  it('test case 1', function () {
    const s = 'egg'
    const t = 'add'
    const result = true
    expect(isIsomorphic(s, t)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'foo'
    const t = 'bar'
    const result = false
    expect(isIsomorphic(s, t)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'paper'
    const t = 'title'
    const result = true
    expect(isIsomorphic(s, t)).toEqual(result)
  })
})
