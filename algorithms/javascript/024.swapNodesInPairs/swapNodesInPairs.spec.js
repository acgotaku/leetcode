import { ListNode, swapPairs } from './swapNodesInPairs'

describe('swapPairs', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('swapPairs test case 1', function () {
    const l = [1, 2, 3, 4].reduceRight(reducer, null)
    const result = [2, 1, 4, 3].reduceRight(reducer, null)
    expect(swapPairs(l)).toEqual(result)
  })
})
