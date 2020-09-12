import { ListNode, reverseBetween } from './reverseLinkedList.II'

describe('reverseBetween', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const m = 2
    const n = 4
    const result = [1, 4, 3, 2, 5].reduceRight(reducer, null)
    expect(reverseBetween(head, m, n)).toEqual(result)
  })
  it('test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const m = 2
    const n = 2
    const result = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    expect(reverseBetween(head, m, n)).toEqual(result)
  })
})
