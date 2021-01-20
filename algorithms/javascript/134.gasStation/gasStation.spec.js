import { canCompleteCircuit } from './gasStation'

describe('canCompleteCircuit', function () {
  it('test case 1', function () {
    const gas = [1, 2, 3, 4, 5]
    const cost = [3, 4, 5, 1, 2]
    const result = 3
    expect(canCompleteCircuit(gas, cost)).toEqual(result)
  })
  it('test case 2', function () {
    const gas = [2, 3, 4]
    const cost = [3, 4, 3]
    const result = -1
    expect(canCompleteCircuit(gas, cost)).toEqual(result)
  })
  it('test case 3', function () {
    const gas = [5, 1, 2, 3, 4]
    const cost = [4, 4, 1, 5, 1]
    const result = 4
    expect(canCompleteCircuit(gas, cost)).toEqual(result)
  })
})
