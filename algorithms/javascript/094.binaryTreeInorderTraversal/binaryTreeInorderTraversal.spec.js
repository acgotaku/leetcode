import { TreeNode, inorderTraversal } from './binaryTreeInorderTraversal'

describe('inorderTraversal', function () {
  const buildTree = (arr) => {
    const nodes = arr.map(val => {
      if (val) {
        return new TreeNode(val)
      } else {
        return val
      }
    })
    let j = 1
    for (let i = 0; j < arr.length; i++) {
      const node = nodes[i]
      if (node) {
        node.left = nodes[j++]
        node.right = nodes[j++] || null
      }
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
