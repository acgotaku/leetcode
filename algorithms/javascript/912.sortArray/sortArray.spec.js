import { sortArray } from './sortArray'

describe('sortArray', function () {
  it('test case 1', function () {
    const nums = [5, 2, 3, 1]

    const result = [1, 2, 3, 5]
    expect(sortArray(nums)).toEqual(result)
  })
  // it('test case 2', function () {
  //   const nums = [5, 1, 1, 2, 0, 0]

  //   const result = [0, 0, 1, 1, 2, 5]
  //   expect(sortArray(nums)).toEqual(result)
  // })
})
