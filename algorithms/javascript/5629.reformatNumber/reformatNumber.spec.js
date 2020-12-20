import { reformatNumber } from './reformatNumber'

describe('reformatNumber', function () {
  it('test case 1', function () {
    const number = '1-23-45 6'

    const result = '123-456'

    expect(reformatNumber(number)).toEqual(result)
  })
  it('test case 2', function () {
    const number = '123 4-567'

    const result = '123-45-67'

    expect(reformatNumber(number)).toEqual(result)
  })
  it('test case 3', function () {
    const number = '123 4-5678'
    const result = '123-456-78'

    expect(reformatNumber(number)).toEqual(result)
  })
  it('test case 4', function () {
    const number = '12'
    const result = '12'

    expect(reformatNumber(number)).toEqual(result)
  })
  it('test case 5', function () {
    const number = '--17-5 229 35-39475 '
    const result = '175-229-353-94-75'

    expect(reformatNumber(number)).toEqual(result)
  })
})
