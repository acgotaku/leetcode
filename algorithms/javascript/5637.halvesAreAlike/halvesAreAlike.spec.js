import { halvesAreAlike } from './halvesAreAlike'

describe('halvesAreAlike', function () {
  it('test case 1', function () {
    const s = 'book'

    const result = true

    expect(halvesAreAlike(s)).toEqual(result)
  })
  it('test case 2', function () {
    const s = 'textbook'

    const result = false

    expect(halvesAreAlike(s)).toEqual(result)
  })
  it('test case 3', function () {
    const s = 'MerryChristmas'

    const result = false

    expect(halvesAreAlike(s)).toEqual(result)
  })
  it('test case 4', function () {
    const s = 'AbCdEfGh'

    const result = true

    expect(halvesAreAlike(s)).toEqual(result)
  })
})
