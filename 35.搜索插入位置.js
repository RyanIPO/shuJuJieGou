/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 *
 * https://leetcode-cn.com/problems/search-insert-position/description/
 *
 * algorithms
 * Easy (42.94%)
 * Total Accepted:    35.1K
 * Total Submissions: 81.5K
 * Testcase Example:  '[1,3,5,6]\n5'
 *
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 
 * 你可以假设数组中无重复元素。
 * 
 * 示例 1:
 * 
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 
 * 
 * 示例 2:
 * 
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 
 * 
 * 示例 3:
 * 
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 
 * 
 * 示例 4:
 * 
 * 输入: [1,3,5,6], 0
 * 输出: 0
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// var searchInsert = function (nums, target) {
//   let index = nums.indexOf(target)
//   let max = Math.max.apply(null, nums)
//   let len = nums.length
//   if (target > max) {
//     return len
//   }
//   if (index == -1) {
//     for (i = 0; i < len; i++) {
//       if (target < nums[i]) {
//         return i
//       }
//     }
//   } else {
//     return index
//   }
// };

var searchInsert = function (nums, target) {
  // includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
  if (nums.includes(target)) {
    // findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
    return nums.findIndex(val => {
      return val === target;
    });
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (target < nums[i]) {
        return i;
      }
    }
    return nums.length;
  }
};

// console.log()