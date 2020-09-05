import { ListNode, deleteDuplicates } from './removeDuplicatesFromSortedList'

describe('deleteDuplicates', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 1, 2].reduceRight(reducer, null)
    const result = [1, 2].reduceRight(reducer, null)
    expect(deleteDuplicates(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [1, 1, 2, 3, 3].reduceRight(reducer, null)
    const result = [1, 2, 3].reduceRight(reducer, null)
    expect(deleteDuplicates(head)).toEqual(result)
  })
})
