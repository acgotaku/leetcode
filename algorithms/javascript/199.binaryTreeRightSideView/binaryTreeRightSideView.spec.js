import { TreeNode, rightSideView } from './binaryTreeRightSideView'

describe('rightSideView', function () {
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
    const tree = buildTree([1, 2, 3, null, 5, null, 4])
    const result = [1, 3, 4]
    expect(rightSideView(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([1, null, 3])
    const result = [1, 3]
    expect(rightSideView(tree)).toEqual(result)
  })
  it('test case 3', function () {
    const tree = null
    const result = []
    expect(rightSideView(tree)).toEqual(result)
  })
  it('test case 4', function () {
    const tree = buildTree([1, 2])
    const result = [1, 2]
    expect(rightSideView(tree)).toEqual(result)
  })
  it('test case 5', function () {
    const tree = buildTree([1, 2, 3, 4])
    const result = [1, 3, 4]
    expect(rightSideView(tree)).toEqual(result)
  })
})
