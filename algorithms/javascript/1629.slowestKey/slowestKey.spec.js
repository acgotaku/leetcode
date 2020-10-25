import { slowestKey } from './slowestKey'

describe('slowestKey', function () {
  it('test case 1', function () {
    const releaseTimes = [9, 29, 49, 50]
    const keysPressed = 'cbcd'
    const result = 'c'

    expect(slowestKey(releaseTimes, keysPressed)).toEqual(result)
  })
  it('test case 2', function () {
    const releaseTimes = [12, 23, 36, 46, 62]
    const keysPressed = 'spuda'
    const result = 'a'

    expect(slowestKey(releaseTimes, keysPressed)).toEqual(result)
  })
})
