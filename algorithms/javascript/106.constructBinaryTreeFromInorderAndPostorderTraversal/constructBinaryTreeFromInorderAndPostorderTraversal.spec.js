import { TreeNode, buildTree } from './constructBinaryTreeFromInorderAndPostorderTraversal'

describe('buildTree', function () {
  const buildTreeFromLevel = (arr) => {
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
    const inorder = [9, 3, 15, 20, 7]
    const postorder = [9, 15, 7, 20, 3]
    const result = buildTreeFromLevel([3, 9, 20, null, null, 15, 7])

    expect(buildTree(inorder, postorder)).toEqual(result)
  })
})
