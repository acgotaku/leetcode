import { isInterleave, isInterleaveDP } from './interleavingString'

describe('isInterleave', function () {
  it('test case 1', function () {
    const s1 = 'aabcc'
    const s2 = 'dbbca'
    const s3 = 'aadbbcbcac'
    const result = true
    expect(isInterleave(s1, s2, s3)).toEqual(result)
    expect(isInterleaveDP(s1, s2, s3)).toEqual(result)
  })
  it('test case 2', function () {
    const s1 = 'aabcc'
    const s2 = 'dbbca'
    const s3 = 'aadbbbaccc'
    const result = false
    expect(isInterleave(s1, s2, s3)).toEqual(result)
    expect(isInterleaveDP(s1, s2, s3)).toEqual(result)
  })
  it('test case 3', function () {
    const s1 = ''
    const s2 = ''
    const s3 = ''
    const result = true
    expect(isInterleave(s1, s2, s3)).toEqual(result)
    expect(isInterleaveDP(s1, s2, s3)).toEqual(result)
  })
  it('test case 4', function () {
    const s1 = 'a'
    const s2 = ''
    const s3 = 'a'
    const result = true
    expect(isInterleave(s1, s2, s3)).toEqual(result)
    expect(isInterleaveDP(s1, s2, s3)).toEqual(result)
  })
  it('test case 5', function () {
    const s1 = ''
    const s2 = 'b'
    const s3 = 'b'
    const result = true
    expect(isInterleave(s1, s2, s3)).toEqual(result)
    expect(isInterleaveDP(s1, s2, s3)).toEqual(result)
  })

  it('test case 5', function () {
    const s1 = 'a'
    const s2 = 'b'
    const s3 = ''
    const result = false
    expect(isInterleave(s1, s2, s3)).toEqual(result)
    expect(isInterleaveDP(s1, s2, s3)).toEqual(result)
  })
})
