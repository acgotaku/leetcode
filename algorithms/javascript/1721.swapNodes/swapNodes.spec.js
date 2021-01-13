import { ListNode, swapNodes } from './swapNodes'

describe('swapNodes', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const k = 2
    const result = [1, 4, 3, 2, 5].reduceRight(reducer, null)
    expect(swapNodes(head, k)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [7, 9, 6, 6, 7, 8, 3, 0, 9, 5].reduceRight(reducer, null)
    const k = 5
    const result = [7, 9, 6, 6, 8, 7, 3, 0, 9, 5].reduceRight(reducer, null)
    expect(swapNodes(head, k)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [1].reduceRight(reducer, null)
    const k = 1
    const result = [1].reduceRight(reducer, null)
    expect(swapNodes(head, k)).toEqual(result)
  })
  it('test case 4', function () {
    const head = [1, 2].reduceRight(reducer, null)
    const k = 1
    const result = [2, 1].reduceRight(reducer, null)
    expect(swapNodes(head, k)).toEqual(result)
  })
  it('test case 5', function () {
    const head = [1, 2, 3].reduceRight(reducer, null)
    const k = 2
    const result = [1, 2, 3].reduceRight(reducer, null)
    expect(swapNodes(head, k)).toEqual(result)
  })
})
