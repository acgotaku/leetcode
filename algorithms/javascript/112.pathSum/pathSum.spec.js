import { TreeNode, hasPathSum } from './pathSum'

describe('hasPathSum', function () {
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
    const tree = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1])
    const sum = 22
    const result = true
    expect(hasPathSum(tree, sum)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([])
    const sum = 0
    const result = false
    expect(hasPathSum(tree, sum)).toEqual(result)
  })
  it('test case 3', function () {
    const tree = buildTree([1, 2])
    const sum = 1
    const result = false
    expect(hasPathSum(tree, sum)).toEqual(result)
  })
  it('test case 4', function () {
    const tree = buildTree([-2, null, -3])
    const sum = -5
    const result = true
    expect(hasPathSum(tree, sum)).toEqual(result)
  })
})
