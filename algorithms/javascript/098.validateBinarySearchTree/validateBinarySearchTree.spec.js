import { TreeNode, isValidBST } from './validateBinarySearchTree'

describe('isValidBST', function () {
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
    const tree = [2, 1, 3]
    const result = true
    expect(isValidBST(buildTree(tree))).toEqual(result)
  })
  it('test case 2', function () {
    const tree = [5, 1, 4, null, null, 3, 6]
    const result = false
    expect(isValidBST(buildTree(tree))).toEqual(result)
  })
  it('test case 3', function () {
    const tree = [1, 1]
    const result = false
    expect(isValidBST(buildTree(tree))).toEqual(result)
  })
})
