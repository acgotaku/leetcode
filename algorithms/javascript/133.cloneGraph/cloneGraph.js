// Source : https://leetcode.com/problems/clone-graph/
// Author : acgotaku311
// Date   : 2020-12-26

/** ********************************************************************************
*
* Given a string s, partition s such that every substring of the partition is a palindrome.
*
* Return the minimum cuts needed for a palindrome partitioning of s.
*
* For example, given s = "aab",
* Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.
*
*
**********************************************************************************/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */
// Definition for a Node.
function Node (val, neighbors) {
  this.val = val === undefined ? 0 : val
  this.neighbors = neighbors === undefined ? [] : neighbors
}
/**
 * @param {Node} node
 * @return {Node}
 */
const cloneGraph = function (node) {
  if (node === null) {
    return null
  }
  const oldDict = {}
  const newDict = {}
  const queue = [node]

  while (queue.length > 0) {
    const n = queue.shift()
    const newNode = new Node(n.val)
    newDict[newNode.val] = newNode
    oldDict[n.val] = n
    for (let i = 0; i < n.neighbors.length; i++) {
      const near = n.neighbors[i]
      if (!newDict[near.val]) {
        queue.push(near)
      }
    }
  }
  for (const key in newDict) {
    const newNode = newDict[key]
    const oldNode = oldDict[key]
    newNode.neighbors = oldNode.neighbors.map(item => newDict[item.val])
  }

  return newDict[node.val]
}

export { Node, cloneGraph }
