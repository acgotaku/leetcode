import { TreeNode, flatten } from './flattenBinaryTreeToLinkedList'

describe('flatten', function () {
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
    const tree = buildTree([1, 2, 5, 3, 4, null, 6])
    const result = buildTree([1, null, 2, null, 3, null, 4, null, 5, null, 6])
    flatten(tree)
    expect(tree).toEqual(result)
  })
})
