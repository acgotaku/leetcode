// Source : https://leetcode.com/problems/intersection-of-two-linked-lists/
// Author : acgotaku311
// Date   : 2021-03-05

/** ********************************************************************************
 *
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 *
 * For example, the following two linked lists:
 *
 *
 *    A:          a1 → a2
 *                       ↘
 *                         c1 → c2 → c3
 *                       ↗
 *    B:     b1 → b2 → b3
 *
 * begin to intersect at node c1.
 *
 * Notes:
 *
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
 *
 **********************************************************************************/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  let p1 = headA
  let p2 = headB
  let len1 = 0
  let len2 = 0
  while (p1) {
    p1 = p1.next
    len1++
  }

  while (p2) {
    p2 = p2.next
    len2++
  }

  if (len1 < len2) {
    return getIntersectionNode(headB, headA)
  }
  p1 = headA
  p2 = headB
  let gap = len1 - len2
  while (gap > 0) {
    p1 = p1.next
    gap--
  }

  while (p1 || p2) {
    if (p1 === p2) {
      return p1
    }
    p1 = p1.next
    p2 = p2.next
  }

  return null
}
export { ListNode, getIntersectionNode }
