import { TreeNode, levelOrder } from './binaryTreeLevelOrderTraversal'

describe('levelOrder', function () {
  const buildTree = (arr) => {
    const nodes = arr.map(val => val ? new TreeNode(val) : null)
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
    const tree = buildTree([3, 9, 20, null, null, 15, 7])
    const result = [
      [3],
      [9, 20],
      [15, 7]
    ]

    expect(levelOrder(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = null
    const result = []

    expect(levelOrder(tree)).toEqual(result)
  })
})
