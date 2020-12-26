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
  const dict = {}

  const queue = [node]

  while (queue.length > 0) {
    const oldNode = queue.shift()
    const newNode = dict[oldNode.val] || new Node(oldNode.val)
    dict[newNode.val] = newNode

    for (let i = 0; i < oldNode.neighbors.length; i++) {
      const near = oldNode.neighbors[i]
      if (!dict[near.val]) {
        queue.push(near)
        const newNear = new Node(near.val)
        dict[newNear.val] = newNear
      }
    }
    newNode.neighbors = oldNode.neighbors.map(near => dict[near.val])
  }

  return dict[node.val]
}

export { Node, cloneGraph }
