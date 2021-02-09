import { ListNode, reorderList } from './reorderList'

describe('reorderList', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('test case 1', function () {
    const head = [1, 2, 3, 4].reduceRight(reducer, null)
    const result = [1, 4, 2, 3].reduceRight(reducer, null)
    expect(reorderList(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const result = [1, 5, 2, 4, 3].reduceRight(reducer, null)
    expect(reorderList(head)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [1].reduceRight(reducer, null)
    const result = [1].reduceRight(reducer, null)
    expect(reorderList(head)).toEqual(result)
  })
  it('test case43', function () {
    const head = null
    const result = null
    expect(reorderList(head)).toEqual(result)
  })
})
