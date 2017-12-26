import { ListNode, addTwoNumbers } from './addTwoNumbers'

describe('addTwoNumbers', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('addTwoNumbers test case 1', function () {
    const add1 = [3, 4, 2].reduce(reducer, null)
    const add2 = [4, 6, 5].reduce(reducer, null)
    const sum = [8, 0, 7].reduce(reducer, null)
    expect(addTwoNumbers(add1, add2)).toEqual(sum)
  })
})
