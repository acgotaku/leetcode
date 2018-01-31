import { strStr } from './strStr'

describe('strStr', function () {
  it('strStr test case 1', function () {
    const haystack = 'hello'
    const needle = 'll'
    expect(strStr(haystack, needle)).toEqual(2)
  })

  it('strStr test case 2', function () {
    const haystack = 'aaaaa'
    const needle = 'bba'
    expect(strStr(haystack, needle)).toEqual(-1)
  })

  it('strStr test case 3', function () {
    const haystack = ''
    const needle = ''
    expect(strStr(haystack, needle)).toEqual(0)
  })

  it('strStr test case 4', function () {
    const haystack = ''
    const needle = 'll'
    expect(strStr(haystack, needle)).toEqual(-1)
  })

  it('strStr test case 5', function () {
    const haystack = 'a'
    const needle = ''
    expect(strStr(haystack, needle)).toEqual(0)
  })

  it('strStr test case 6', function () {
    const haystack = 'mississippi'
    const needle = 'issip'
    expect(strStr(haystack, needle)).toEqual(4)
  })
})
