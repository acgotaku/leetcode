import { TreeNode, BSTIterator } from './binarySearchTreeIterator'

describe('trailingZeroes', function () {
  const buildTree = (arr) => {
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
    const tree = buildTree([7, 3, 15, null, null, 9, 20])
    const bSTIterator = new BSTIterator(tree)
    expect(bSTIterator.next()).toEqual(3)
    expect(bSTIterator.next()).toEqual(7)
    expect(bSTIterator.hasNext()).toEqual(true)
    expect(bSTIterator.next()).toEqual(9)
    expect(bSTIterator.hasNext()).toEqual(true)
    expect(bSTIterator.next()).toEqual(15)
    expect(bSTIterator.hasNext()).toEqual(true)
    expect(bSTIterator.next()).toEqual(20)
    expect(bSTIterator.hasNext()).toEqual(false)
  })
})
