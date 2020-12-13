import { stoneGameVII } from './stoneGameVII'

describe('stoneGameVII', function () {
  it('test case 1', function () {
    const stones = [5, 3, 1, 4, 2]

    const result = 6

    expect(stoneGameVII(stones)).toEqual(result)
  })
  it('test case 2', function () {
    const stones = [7, 90, 5, 1, 100, 10, 10, 2]
    const result = 122

    expect(stoneGameVII(stones)).toEqual(result)
  })
  it('test case 3', function () {
    const stones = [1, 100, 1]
    const result = 1

    expect(stoneGameVII(stones)).toEqual(result)
  })
  it('test case 4', function () {
    const stones = [1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1, 1, 1, 1]
    const result = 7

    expect(stoneGameVII(stones)).toEqual(result)
  })
  it('test case 5', function () {
    const stones = [721, 979, 690, 84, 742, 873, 31, 323, 819, 22, 928, 866, 118, 843, 169, 818, 908, 832, 852, 480, 763, 715, 875, 629]
    const result = 7948

    expect(stoneGameVII(stones)).toEqual(result)
  })
})
