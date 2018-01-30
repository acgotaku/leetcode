import { ListNode, mergeKLists } from './generateParentheses'

describe('mergeKLists', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('mergeKLists test case 1', function () {
    const l1 = [1, 2, 4].reduceRight(reducer, null)
    const l2 = [1, 3, 4].reduceRight(reducer, null)
    const l3 = [5, 8, 9].reduceRight(reducer, null)
    const result = [1, 1, 2, 3, 4, 4, 5, 8, 9].reduceRight(reducer, null)
    expect(mergeKLists([l1, l2, l3])).toEqual(result)
  })
})
