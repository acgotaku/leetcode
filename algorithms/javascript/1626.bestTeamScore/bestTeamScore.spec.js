import { bestTeamScore } from './bestTeamScore'

describe('bestTeamScore', function () {
  it('test case 1', function () {
    const scores = [1, 3, 5, 10, 15]
    const ages = [1, 2, 3, 4, 5]
    const result = 34

    expect(bestTeamScore(scores, ages)).toEqual(result)
  })
  it('test case 2', function () {
    const scores = [4, 5, 6, 5]
    const ages = [2, 1, 2, 1]
    const result = 16

    expect(bestTeamScore(scores, ages)).toEqual(result)
  })
  it('test case 3', function () {
    const scores = [1, 2, 3, 5]
    const ages = [8, 9, 10, 1]
    const result = 6

    expect(bestTeamScore(scores, ages)).toEqual(result)
  })
  it('test case 4', function () {
    const scores = [1]
    const ages = [4]
    const result = 1

    expect(bestTeamScore(scores, ages)).toEqual(result)
  })
  it('test case 4', function () {
    const scores = [596, 277, 897, 622, 500, 299, 34, 536, 797, 32, 264, 948, 645, 537, 83, 589, 770]
    const ages = [18, 52, 60, 79, 72, 28, 81, 33, 96, 15, 18, 5, 17, 96, 57, 72, 72]
    const result = 3287

    expect(bestTeamScore(scores, ages)).toEqual(result)
  })
})
