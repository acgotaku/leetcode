import { Node, connect } from './populatingNextRightPointersInEachNode.II'

describe('connect', function () {
  const buildTree = (arr) => {
    const nodes = arr.map(val => val ? new Node(val) : null)
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
    const root = buildTree([1, 2, 3, 4, 5, null, 7])
    const result = buildTree([1, 2, 3, 4, 5, null, 7])
    const node2 = result.left
    const node3 = result.right
    node2.next = node3
    const node4 = node2.left
    const node5 = node2.right
    const node7 = node3.right
    node4.next = node5
    node5.next = node7
    expect(connect(root)).toEqual(result)
  })
  it('test case 2', function () {
    const root = buildTree([])
    const result = buildTree([])
    expect(connect(root)).toEqual(result)
  })
})
