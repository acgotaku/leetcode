import { ListNode, removeElements } from './removeLinkedListElements'

describe('removeElements', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 2, 6, 3, 4, 5, 6].reduceRight(reducer, null)
    const val = 6
    const result = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    expect(removeElements(head, val)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [].reduceRight(reducer, null)
    const val = 1
    const result = [].reduceRight(reducer, null)
    expect(removeElements(head, val)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [7, 7, 7, 7].reduceRight(reducer, null)
    const val = 7
    const result = [].reduceRight(reducer, null)
    expect(removeElements(head, val)).toEqual(result)
  })
})
