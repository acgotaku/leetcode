import { maximumPopulation } from './maximumPopulation'

describe('maximumPopulation', function () {
  it('test case 1', function () {
    const logs = [[1993, 1999], [2000, 2010]]

    const result = 1993
    expect(maximumPopulation(logs)).toEqual(result)
  })
  it('test case 2', function () {
    const logs = [[1950, 1961], [1960, 1971], [1970, 1981]]

    const result = 1960
    expect(maximumPopulation(logs)).toEqual(result)
  })
})
