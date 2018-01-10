import { reverse } from './reverseInteger'

describe('reverse', function () {
  it('reverse test case 1', function () {
    const s = 123
    expect(reverse(s)).toEqual(321)
  })
  it('reverse test case 2', function () {
    const s = -123
    expect(reverse(s)).toEqual(-321)
  })
  it('reverse test case 3', function () {
    const s = 120
    expect(reverse(s)).toEqual(21)
  })
  it('reverse test case 4', function () {
    const s = 1563847412
    expect(reverse(s)).toEqual(0)
  })
})
