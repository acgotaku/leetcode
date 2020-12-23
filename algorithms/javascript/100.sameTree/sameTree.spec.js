import { TreeNode, isSameTree } from './sameTree'

describe('recoverTree', function () {
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
    const tree1 = buildTree([1, 2, 3])
    const tree2 = buildTree([1, 2, 3])
    const result = true

    expect(isSameTree(tree1, tree2)).toEqual(result)
  })
  it('test case 2', function () {
    const tree1 = buildTree([1, 2])
    const tree2 = buildTree([1, null, 2])
    const result = false

    expect(isSameTree(tree1, tree2)).toEqual(result)
  })
  it('test case 3', function () {
    const tree1 = buildTree([1, 2, 1])
    const tree2 = buildTree([1, 1, 2])
    const result = false

    expect(isSameTree(tree1, tree2)).toEqual(result)
  })
})
