import { ListNode, rotateRight } from './rotateList'

describe('rotateRight', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  it('rotateRight test case 1', function () {
    const head = [1, 2, 3, 4, 5].reduceRight(reducer, null)
    const k = 2
    const result = [4, 5, 1, 2, 3].reduceRight(reducer, null)
    expect(rotateRight(head, k)).toEqual(result)
  })
  it('rotateRight test case 2', function () {
    const head = [0, 1, 2].reduceRight(reducer, null)
    const k = 4
    const result = [2, 0, 1].reduceRight(reducer, null)
    expect(rotateRight(head, k)).toEqual(result)
  })
  it('rotateRight test case 3', function () {
    const head = [0, 1, 2].reduceRight(reducer, null)
    const k = 0
    const result = [0, 1, 2].reduceRight(reducer, null)
    expect(rotateRight(head, k)).toEqual(result)
  })
  it('rotateRight test case 4', function () {
    const head = [].reduceRight(reducer, null)
    const k = 2
    const result = [].reduceRight(reducer, null)
    expect(rotateRight(head, k)).toEqual(result)
  })
  it('rotateRight test case 5', function () {
    const head = [1].reduceRight(reducer, null)
    const k = 1
    const result = [1].reduceRight(reducer, null)
    expect(rotateRight(head, k)).toEqual(result)
  })
})
