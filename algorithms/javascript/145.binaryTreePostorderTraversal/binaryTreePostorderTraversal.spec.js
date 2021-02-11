import { TreeNode, postorderTraversal } from './binaryTreePostorderTraversal'

describe('postorderTraversal', function () {
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
    const tree = buildTree([1, null, 2, 3])
    const result = [3, 2, 1]
    expect(postorderTraversal(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([])
    const result = []
    expect(postorderTraversal(tree)).toEqual(result)
  })
  it('test case 3', function () {
    const tree = buildTree([1])
    const result = [1]
    expect(postorderTraversal(tree)).toEqual(result)
  })
  it('test case 4', function () {
    const tree = buildTree([1, 2])
    const result = [2, 1]
    expect(postorderTraversal(tree)).toEqual(result)
  })
  it('test case 5', function () {
    const tree = buildTree([1, null, 2])
    const result = [2, 1]
    expect(postorderTraversal(tree)).toEqual(result)
  })
})
