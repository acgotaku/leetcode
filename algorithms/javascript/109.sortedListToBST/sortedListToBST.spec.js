import { ListNode, TreeNode, sortedListToBST } from './sortedListToBST'

describe('sortedListToBST', function () {
  const reducer = (accumulator, currentValue) => {
    const node = new ListNode(currentValue, accumulator)
    return node
  }
  const buildTree = (arr) => {
    if (arr.length === 0) {
      return null
    }
    const nodes = arr.map(val => val !== null ? new TreeNode(val) : null)
    let i = 0
    let j = 1

    while (i < arr.length && j < arr.length) {
      const node = nodes[i]
      if (node) {
        node.left = nodes[j++]
        node.right = nodes[j++] || null
      }
      i++
    }

    return nodes[0]
  }
  it('test case 1', function () {
    const head = [-10, -3, 0, 5, 9].reduceRight(reducer, null)
    const result = buildTree([0, -3, 9, -10, null, 5])
    expect(sortedListToBST(head)).toEqual(result)
  })
  it('test case 2', function () {
    const head = [].reduceRight(reducer, null)
    const result = buildTree([])
    expect(sortedListToBST(head)).toEqual(result)
  })
  it('test case 3', function () {
    const head = [0].reduceRight(reducer, null)
    const result = buildTree([0])
    expect(sortedListToBST(head)).toEqual(result)
  })
  it('test case 4', function () {
    const head = [1, 3].reduceRight(reducer, null)
    const result = buildTree([3, 1])
    expect(sortedListToBST(head)).toEqual(result)
  })
})
