import { ListNode, reverseKGroup } from './reverseNodesInKGroup'

describe('reverseNodesInKGroup', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('reverseNodesInKGroup test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const result = [2, 1, 4, 3, 5].reduceRight(reducer, null)
    expect(reverseKGroup(head, 2)).toEqual(result)
  })
  it('reverseNodesInKGroup test case 2', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const result = [3, 2, 1, 4, 5].reduceRight(reducer, null)
    expect(reverseKGroup(head, 3)).toEqual(result)
  })
  it('reverseNodesInKGroup test case 3', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const result = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    expect(reverseKGroup(head, 0)).toEqual(result)
  })
})
