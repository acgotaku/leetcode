import { canReach } from './canReach'

describe('canReach', function () {
  it('test case 1', function () {
    const s = '011010'
    const minJump = 2
    const maxJump = 3

    const result = true
    expect(canReach(s, minJump, maxJump)).toEqual(result)
  })
  it('test case 2', function () {
    const s = '01101110'
    const minJump = 2
    const maxJump = 3

    const result = false
    expect(canReach(s, minJump, maxJump)).toEqual(result)
  })
  it('test case 3', function () {
    const s = '000000000000000000000000000000000000000001'
    const minJump = 1
    const maxJump = 999

    const result = false
    expect(canReach(s, minJump, maxJump)).toEqual(result)
  })
})
