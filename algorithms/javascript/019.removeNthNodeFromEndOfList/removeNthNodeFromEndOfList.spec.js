import { ListNode, removeNthFromEnd } from './removeNthNodeFromEndOfList'

describe('removeNthNodeFromEndOfList', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('removeNthNodeFromEndOfList test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const result = [1, 2, 3, 5].reduceRight(reducer, null)
    expect(removeNthFromEnd(head, 2)).toEqual(result)
  })
  it('removeNthNodeFromEndOfList test case 2', function () {
    const head = null
    expect(removeNthFromEnd(head, 1)).toEqual(null)
  })
})
