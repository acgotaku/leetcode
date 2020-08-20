import { simplifyPath } from './simplifyPath'

describe('simplifyPath', function () {
  it('test case 1', function () {
    const path = '/home/'
    const result = '/home'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 2', function () {
    const path = '/../'
    const result = '/'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 3', function () {
    const path = '/home//foo/'
    const result = '/home/foo'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 4', function () {
    const path = '/a/./b/../../c/'
    const result = '/c'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 5', function () {
    const path = '/a/../../b/../c//.//'
    const result = '/c'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 6', function () {
    const path = '/a//b////c/d//././/..'
    const result = '/a/b/c'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 7', function () {
    const path = '/...'
    const result = '/...'
    expect(simplifyPath(path)).toEqual(result)
  })
  it('test case 8', function () {
    const path = '/.../'
    const result = '/...'
    expect(simplifyPath(path)).toEqual(result)
  })
})
