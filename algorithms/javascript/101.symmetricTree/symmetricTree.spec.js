import { TreeNode, isSymmetric, isSymmetric2 } from './symmetricTree'

describe('isSymmetric', function () {
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
    const tree = buildTree([1, 2, 2, 3, 4, 4, 3])
    const result = true

    expect(isSymmetric(tree)).toEqual(result)
    expect(isSymmetric2(tree)).toEqual(result)
  })
  it('test case 2', function () {
    const tree = buildTree([1, 2, 2, null, 3, null, 3])
    const result = false

    expect(isSymmetric(tree)).toEqual(result)
    expect(isSymmetric2(tree)).toEqual(result)
  })
  it('test case 3', function () {
    const tree = null
    const result = true

    expect(isSymmetric(tree)).toEqual(result)
    expect(isSymmetric2(tree)).toEqual(result)
  })
  it('test case 4', function () {
    const tree = buildTree([1, 2, 2, 3, 4, 6, 3])
    const result = false

    expect(isSymmetric(tree)).toEqual(result)
    expect(isSymmetric2(tree)).toEqual(result)
  })
  it('test case 5', function () {
    const tree = buildTree([9, -42, -42, null, 76, 76, null, null, 13, null, 13])
    const result = false

    expect(isSymmetric(tree)).toEqual(result)
    expect(isSymmetric2(tree)).toEqual(result)
  })
})
