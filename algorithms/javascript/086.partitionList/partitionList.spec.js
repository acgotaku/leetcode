import { ListNode, partition } from './partitionList'

describe('partition', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 4, 3, 2, 5, 2].reduceRight(reducer, null)
    const x = 3
    const result = [1, 2, 2, 4, 3, 5].reduceRight(reducer, null)
    expect(partition(head, x)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [2, 1].reduceRight(reducer, null)
    const x = 2
    const result = [1, 2].reduceRight(reducer, null)
    expect(partition(head, x)).toEqual(result)
  })
})
