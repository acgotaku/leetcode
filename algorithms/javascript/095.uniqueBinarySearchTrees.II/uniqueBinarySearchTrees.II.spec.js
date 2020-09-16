import { TreeNode, generateTrees } from './uniqueBinarySearchTrees.II'

describe('generateTrees', function () {
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
    const n = 3
    const result = [
      [1, null, 2, null, 3],
      [1, null, 3, 2],
      [2, 1, 3],
      [3, 1, null, null, 2],
      [3, 2, null, 1]
    ]
    expect(generateTrees(n).sort()).toEqual(result.map(tree => buildTree(tree)))
  })
  it('test case 2', function () {
    const n = 0
    const result = []
    expect(generateTrees(n).sort()).toEqual(result.map(tree => buildTree(tree)))
  })
})
