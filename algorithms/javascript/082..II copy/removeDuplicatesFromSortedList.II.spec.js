import { ListNode, deleteDuplicates } from './removeDuplicatesFromSortedList.II'

describe('deleteDuplicates', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 2, 3, 3, 4, 4, 5].reduceRight(reducer, null)
    const result = [1, 2, 5].reduceRight(reducer, null)
    expect(deleteDuplicates(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [1, 1, 1, 2, 3].reduceRight(reducer, null)
    const result = [2, 3].reduceRight(reducer, null)
    expect(deleteDuplicates(head)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [1, 1, 1].reduceRight(reducer, null)
    const result = [].reduceRight(reducer, null)
    expect(deleteDuplicates(head)).toEqual(result)
  })
  it('test case 4', function () {
    const head = [].reduceRight(reducer, null)
    const result = [].reduceRight(reducer, null)
    expect(deleteDuplicates(head)).toEqual(result)
  })
})
