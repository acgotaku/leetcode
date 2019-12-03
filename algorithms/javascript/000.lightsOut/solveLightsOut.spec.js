import { solveLightsOut } from './solveLightsOut'

describe('solveLightsOut', function () {
  it('solveLightsOut test case 1', function () {
    const board = [
      [0, 1, 0, 0],
      [1, 1, 1, 0],
      [0, 1, 0, 0]
    ]
    expect(solveLightsOut(board)).toEqual(1)
  })

  it('solveLightsOut test case 2', function () {
    const board = [
      [0, 0, 0, 0, 0],
      [0, 1, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ]
    expect(solveLightsOut(board)).toEqual(9)
  })

  it('solveLightsOut test case 3', function () {
    const board = [
      [0, 0, 0, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ]
    expect(solveLightsOut(board)).toEqual(4)
  })

  it('solveLightsOut test case 4', function () {
    const board = [
      [1, 0, 0],
      [0, 0, 0]
    ]
    expect(solveLightsOut(board)).toEqual(-1)
  })
})
