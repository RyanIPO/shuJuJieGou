/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (43.20%)
 * Total Accepted:    43.5K
 * Total Submissions: 100.2K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * 
 * 示例:
 * 
 * 输入: [-2,1,-3,4,-1,2,1,-5,4],
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 * 
 * 
 * 进阶:
 * 
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var sum = 0;
  var maxsum = nums[0];
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum > maxsum) {
      maxsum = sum;
    }
    // 如果小于零，表示加到了负数让他变小了，则重新开始
    if (sum < 0) {
      sum = 0;
    }
  }
  return maxsum;
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))