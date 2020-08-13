import { canJump } from './jumpGame'

describe('canJump', function () {
  it('canJump test case 1', function () {
    const nums = [2, 3, 1, 1, 4]
    expect(canJump(nums)).toEqual(true)
  })

  it('canJump test case 2', function () {
    const nums = [3, 2, 1, 0, 4]
    expect(canJump(nums)).toEqual(false)
  })

  it('canJump test case 3', function () {
    const nums = []
    expect(canJump(nums)).toEqual(false)
  })
})
