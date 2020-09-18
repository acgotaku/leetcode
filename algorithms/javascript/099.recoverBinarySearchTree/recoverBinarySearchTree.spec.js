import { TreeNode, recoverTree } from './recoverBinarySearchTree'

describe('recoverTree', function () {
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
    const tree = buildTree([1, 3, null, null, 2])
    const result = buildTree([3, 1, null, null, 2])
    recoverTree(tree)
    expect(tree).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([3, 1, 4, null, null, 2])
    const result = buildTree([2, 1, 4, null, null, 3])
    recoverTree(tree)
    expect(tree).toEqual(result)
  })
})
