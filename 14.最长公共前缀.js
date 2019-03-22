/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.32%)
 * Total Accepted:    61.5K
 * Total Submissions: 189.5K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 如果不存在公共前缀，返回空字符串 ""。
 * 
 * 示例 1:
 * 
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 
 * 
 * 说明:
 * 
 * 所有输入只包含小写字母 a-z 。
 * 
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // 水平扫描
  // 想象数组的末尾有一个非常短的字符串， 使用上述方法依旧会进行 S​S​ 次比较。 优化这类情况的一种方法就是水平扫描。 我们从前往后枚举字符串的每一列，先比较每个字符串相同列上的字符（即不同字符串相同下标的字符）然后再进行对下一列的比较。
  let first = strs[0]
  let result = '';
  if (!strs.length) {
    return result;
  }
  for (let i = 0; i < strs[0].length; i++) {
    let Pre = first[i]
    for (let j = 1; j < strs.length; j++) {
      if (i == strs[j].length || strs[j][i] != Pre) {
        return strs[0].substring(0, i)
      }
    }
    result += first[i]
  }
  return result
};

// var longestCommonPrefix = function (strs) {
//   var firstStrs = strs[0];
//   var result = '';
//   if (!strs.length) {
//     return result;
//   }
//   for (var i = 0; i < firstStrs.length; i++) {
//     for (var j = 1; j < strs.length; j++) {
//       if (firstStrs[i] != strs[j][i]) {
//         return result;
//       }
//     }
//     result += firstStrs[i];
//   }
//   return result;
// };

// console.log(longestCommonPrefix(["flower","flow","light"]))