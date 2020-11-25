import { TreeNode, pathSum } from './pathSum.II'

describe('pathSum', function () {
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
    const tree = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
    const sum = 22
    const result = [
      [5, 4, 11, 2],
      [5, 8, 4, 5]
    ]
    expect(pathSum(tree, sum).sort()).toEqual(result.sort())
  })
})
