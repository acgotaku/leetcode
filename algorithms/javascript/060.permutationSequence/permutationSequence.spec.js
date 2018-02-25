import { getPermutation } from './permutationSequence'

describe('getPermutation', function () {
  it('getPermutation test case 1', function () {
    expect(getPermutation(3, 5)).toEqual('312')
  })
})
