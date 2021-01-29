import { Node, copyRandomList } from './copyListWithRandomPointer'

describe('candy', function () {
  const buildNode = (nodes) => {
    const arr = []
    let head = null
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i]
      const linkNode = new Node(node[0])
      linkNode.next = head
      arr.unshift(linkNode)
      head = linkNode
    }

    for (let i = 0; i < nodes.length; i++) {
      const random = nodes[i][1]
      arr[i].random = random === null ? null : arr[random]
    }
    return head
  }
  it('test case 1', function () {
    const nodes = buildNode([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])
    const result = buildNode([[7, null], [13, 0], [11, 4], [10, 2], [1, 0]])
    expect(copyRandomList(nodes)).toEqual(result)
  })
  it('test case 2', function () {
    const nodes = buildNode([[1, 1], [2, 1]])
    const result = buildNode([[1, 1], [2, 1]])
    expect(copyRandomList(nodes)).toEqual(result)
  })
  it('test case 3', function () {
    const nodes = buildNode([[3, null], [3, 0], [3, null]])
    const result = buildNode([[3, null], [3, 0], [3, null]])
    expect(copyRandomList(nodes)).toEqual(result)
  })
  it('test case 4', function () {
    const nodes = null
    const result = null
    expect(copyRandomList(nodes)).toEqual(result)
  })
})
