import { removeElement } from './removeElement'

describe('removeElement', function () {
  it('removeElement test case 1', function () {
    const nums = [3, 2, 2, 3]
    expect(removeElement(nums, 3)).toEqual(2)
  })
})
