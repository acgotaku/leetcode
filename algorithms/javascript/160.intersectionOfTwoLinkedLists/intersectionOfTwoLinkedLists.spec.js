import { ListNode, getIntersectionNode } from './intersectionOfTwoLinkedLists'

describe('getIntersectionNode', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }

  const tail = (node) => {
    let p = node
    while (p.next) {
      p = p.next
    }
    return p
  }
  it('test case 1', function () {
    const headA = [4, 1].reduceRight(reducer, null)
    const headB = [5, 6, 1].reduceRight(reducer, null)
    const result = [8, 4, 5].reduceRight(reducer, null)
    tail(headA).next = result
    tail(headB).next = result
    expect(getIntersectionNode(headA, headB)).toEqual(result)
  })
  it('test case 2', function () {
    const headA = [1, 9, 1].reduceRight(reducer, null)
    const headB = [3].reduceRight(reducer, null)
    const result = [2, 4].reduceRight(reducer, null)
    tail(headA).next = result
    tail(headB).next = result
    expect(getIntersectionNode(headA, headB)).toEqual(result)
  })
  it('test case 3', function () {
    const headA = [2, 6, 4].reduceRight(reducer, null)
    const headB = [1, 5].reduceRight(reducer, null)
    const result = null
    expect(getIntersectionNode(headA, headB)).toEqual(result)
  })
})
