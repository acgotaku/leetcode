import { ListNode, sortList } from './sortList'

describe('sortList', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue)
    node.next = accumulator
    return node
  }
  it('test case 1', function () {
    const head = [4, 2, 1, 3].reduceRight(reducer, null)
    const result = [1, 2, 3, 4].reduceRight(reducer, null)
    expect(sortList(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [-1, 5, 3, 4, 0].reduceRight(reducer, null)
    const result = [-1, 0, 3, 4, 5].reduceRight(reducer, null)
    expect(sortList(head)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [].reduceRight(reducer, null)
    const result = [].reduceRight(reducer, null)
    expect(sortList(head)).toEqual(result)
  })
  it('test case 4', function () {
    const head = [4, 19, 14, 5, -3, 1, 8, 5, 11, 15].reduceRight(reducer, null)
    const result = [-3, 1, 4, 5, 5, 8, 11, 14, 15, 19].reduceRight(reducer, null)
    expect(sortList(head)).toEqual(result)
  })
})
