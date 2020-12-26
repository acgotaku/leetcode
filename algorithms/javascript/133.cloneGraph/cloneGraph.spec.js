import { Node, cloneGraph } from './cloneGraph'

describe('cloneGraph', function () {
  const buildGraph = (node) => {
    const nodes = []
    const len = node.length
    for (let i = 0; i < len; i++) {
      const n = new Node(i + 1)
      nodes.push(n)
    }
    for (let i = 0; i < len; i++) {
      const near = node[i]
      const neighbors = near.map(item => nodes[item - 1])
      nodes[i].neighbors = neighbors
    }
    return nodes[0]
  }
  it('test case 1', function () {
    const adjList = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]])
    const result = buildGraph([[2, 4], [1, 3], [2, 4], [1, 3]])
    expect(cloneGraph(adjList)).toEqual(result)
  })
  it('test case 2', function () {
    const adjList = null
    const result = null
    expect(cloneGraph(adjList)).toEqual(result)
  })
})
