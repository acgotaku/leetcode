import { ListNode, mergeTwoLists } from './mergeTwoSortedList'

describe('mergeTwoLists', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('mergeTwoLists test case 1', function () {
    const l1 = [1, 2, 4].reduceRight(reducer, null)
    const l2 = [1, 3, 4].reduceRight(reducer, null)
    const result = [1, 1, 2, 3, 4, 4].reduceRight(reducer, null)
    expect(mergeTwoLists(l1, l2)).toEqual(result)
  })
  it('mergeTwoLists test case 2', function () {
    const l1 = [].reduceRight(reducer, null)
    const l2 = [1, 3, 4].reduceRight(reducer, null)
    const result = [1, 3, 4].reduceRight(reducer, null)
    expect(mergeTwoLists(l1, l2)).toEqual(result)
  })
})
