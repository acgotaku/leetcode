import { compareVersion } from './compareVersionNumbers'

describe('compareVersion', function () {
  it('test case 1', function () {
    const version1 = '1.01'
    const version2 = '1.001'
    const result = 0

    expect(compareVersion(version1, version2)).toEqual(result)
  })
  it('test case 2', function () {
    const version1 = '1.0'
    const version2 = '1.0.0'
    const result = 0

    expect(compareVersion(version1, version2)).toEqual(result)
  })
  it('test case 3', function () {
    const version1 = '0.1'
    const version2 = '1.1'
    const result = -1

    expect(compareVersion(version1, version2)).toEqual(result)
  })
  it('test case 4', function () {
    const version1 = '1.0.1'
    const version2 = '1'
    const result = 1

    expect(compareVersion(version1, version2)).toEqual(result)
  })
  it('test case 5', function () {
    const version1 = '7.5.2.4'
    const version2 = '7.5.3'
    const result = -1

    expect(compareVersion(version1, version2)).toEqual(result)
  })
  it('test case 6', function () {
    const version1 = '8.5.2.4'
    const version2 = '7.5.3'
    const result = 1

    expect(compareVersion(version1, version2)).toEqual(result)
  })
  it('test case 7', function () {
    const version1 = '7.1'
    const version2 = '7.1.1.1'
    const result = -1

    expect(compareVersion(version1, version2)).toEqual(result)
  })
})
