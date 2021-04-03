import { ListNode, reverseList } from './reverseLinkedList'

describe('reverseList', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const result = [5, 4, 3, 2, 1].reduceRight(reducer, null)
    expect(reverseList(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [1, 2].reduceRight(reducer, null)
    const result = [2, 1].reduceRight(reducer, null)
    expect(reverseList(head)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [].reduceRight(reducer, null)
    const result = [].reduceRight(reducer, null)
    expect(reverseList(head)).toEqual(result)
  })
})
