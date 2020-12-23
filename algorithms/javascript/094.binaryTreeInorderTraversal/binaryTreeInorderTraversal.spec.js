import { TreeNode, inorderTraversal } from './binaryTreeInorderTraversal'

describe('inorderTraversal', function () {
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
    const tree = buildTree([1, null, 2, 3])
    const result = [1, 3, 2]
    expect(inorderTraversal(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([3, 9, 20, null, null, 15, 7])
    const result = [9, 3, 15, 20, 7]
    expect(inorderTraversal(tree)).toEqual(result)
  })
})
