import { concatenatedBinary } from './concatenatedBinary'

describe('concatenatedBinary', function () {
  it('test case 1', function () {
    const n = 3

    const result = 27

    expect(concatenatedBinary(n)).toEqual(result)
  })
  // it('test case 2', function () {
  //   const n = 12

  //   const result = 505379714

  //   expect(concatenatedBinary(n)).toEqual(result)
  // })
  // it('test case 3', function () {
  //   const n = 42

  //   const result = 727837408

  //   expect(concatenatedBinary(n)).toEqual(result)
  // })
})
