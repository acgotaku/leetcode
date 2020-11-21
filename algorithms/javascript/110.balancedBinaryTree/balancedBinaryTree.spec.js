import { TreeNode, isBalanced } from './balancedBinaryTree'

describe('isBalanced', function () {
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
    const tree = buildTree([3, 9, 20, null, null, 15, 7])
    const result = true
    expect(isBalanced(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([1, 2, 2, 3, 3, null, null, 4, 4])
    const result = false
    expect(isBalanced(tree)).toEqual(result)
  })
  it('test case 3', function () {
    const tree = buildTree([])
    const result = true
    expect(isBalanced(tree)).toEqual(result)
  })
})
