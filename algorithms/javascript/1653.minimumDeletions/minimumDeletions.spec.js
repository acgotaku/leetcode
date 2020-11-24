import { minimumDeletions } from './minimumDeletions'

describe('minimumDeletions', function () {
  it('test case 1', function () {
    const s = 'aababbab'
    const result = 2

    expect(minimumDeletions(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'bbaaaaabb'
    const result = 2

    expect(minimumDeletions(s)).toEqual(result)
  })
})
