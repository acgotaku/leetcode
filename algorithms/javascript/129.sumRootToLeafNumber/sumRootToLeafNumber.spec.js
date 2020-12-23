import { TreeNode, sumNumbers } from './sumRootToLeafNumber'

describe('sumNumbers', function () {
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
    const tree = buildTree([1, 2, 3])
    const result = 25
    expect(sumNumbers(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([4, 9, 0, 5, 1])
    const result = 1026
    expect(sumNumbers(tree)).toEqual(result)
  })
  it('test case 3', function () {
    const tree = buildTree([])
    const result = 0
    expect(sumNumbers(tree)).toEqual(result)
  })
})
