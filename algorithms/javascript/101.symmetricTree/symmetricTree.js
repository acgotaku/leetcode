// Source : https://leetcode.com/problems/symmetric-tree/
// Author : acgotaku311
// Date   : 2020-09-22

/** ********************************************************************************
*
* Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
*
* For example, this binary tree is symmetric:
*
*     1
*    / \
*   2   2
*  / \ / \
* 3  4 4  3
*
* But the following is not:
*
*     1
*    / \
*   2   2
*    \   \
*    3    3
*
* Note:
* Bonus points if you could solve it both recursively and iteratively.
*
* confused what "{1,#,2,3}" means? > read more on how binary tree is serialized on OJ.
*
* OJ's Binary Tree Serialization:
*
* The serialization of a binary tree follows a level order traversal, where '#' signifies
* a path terminator where no node exists below.
*
* Here's an example:
*
*    1
*   / \
*  2   3
*     /
*    4
*     \
*      5
*
* The above binary tree is serialized as "{1,2,3,#,#,4,#,#,5}".
*
*
**********************************************************************************/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function (root) {
  const compare = (left, right) => {
    if (left === null && right === null) {
      return true
    }
    if (left === null || right === null) {
      return false
    }
    if (left.val === right.val) {
      if (compare(left.left, right.right) && compare(left.right, right.left)) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  }
  if (root) {
    return compare(root.left, root.right)
  } else {
    return true
  }
}

const isSymmetric2 = function (root) {
  const compare = (left, right) => {
    const leftQueue = [left]
    const rightQueue = [right]
    while (leftQueue.length > 0 && rightQueue.length > 0) {
      const l = leftQueue.shift()
      const r = rightQueue.shift()
      if (l === null && r === null) {
        continue
      }
      if (l === null || r === null) {
        return false
      }
      if (l.val === r.val) {
        leftQueue.push(l.left)
        rightQueue.push(r.right)

        leftQueue.push(l.right)
        rightQueue.push(r.left)
      } else {
        return false
      }
    }
    return true
  }
  if (root) {
    return compare(root.left, root.right)
  } else {
    return true
  }
}

export { TreeNode, isSymmetric, isSymmetric2 }
