/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 *
 * https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/description/
 *
 * algorithms
 * Easy (44.32%)
 * Total Accepted:    20K
 * Total Submissions: 45K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个排序链表，删除所有重复的元素，使得每个元素只出现一次。
 * 
 * 示例 1:
 * 
 * 输入: 1->1->2
 * 输出: 1->2
 * 
 * 
 * 示例 2:
 * 
 * 输入: 1->1->2->3->3
 * 输出: 1->2->3
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head || head.val == null) return head
  //当前节点指向头节点
  let currNode = head
  // 当前节点的下一个节点存在
  while (currNode.next) {
    // 当当前节点的值等于下一个节点的值
    if (currNode.val === currNode.next.val) {
      // 相当于删除当前节点的下一个节点
      currNode.next = currNode.next.next

    } else { //当当前节点的值不等于下一个节点的值
      //改变当前节点
      currNode = currNode.next
    }
  }
  return head
};
