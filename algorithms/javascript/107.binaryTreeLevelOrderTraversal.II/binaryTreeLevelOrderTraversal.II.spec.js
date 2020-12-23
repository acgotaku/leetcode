import { TreeNode, levelOrderBottom } from './binaryTreeLevelOrderTraversal.II'

describe('levelOrderBottom', function () {
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
    const tree = buildTree([3, 9, 20, null, null, 15, 7])
    const result = [
      [15, 7],
      [9, 20],
      [3]
    ]

    expect(levelOrderBottom(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = null
    const result = []

    expect(levelOrderBottom(tree)).toEqual(result)
  })
})
