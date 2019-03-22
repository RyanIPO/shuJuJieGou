/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (28.93%)
 * Total Accepted:    20.6K
 * Total Submissions: 71K
 * Testcase Example:  '"Hello World"'
 *
 * 给定一个仅包含大小写字母和空格 ' ' 的字符串，返回其最后一个单词的长度。
 * 
 * 如果不存在最后一个单词，请返回 0 。
 * 
 * 说明：一个单词是指由字母组成，但不包含任何空格的字符串。
 * 
 * 示例:
 * 
 * 输入: "Hello World"
 * 输出: 5
 * 
 * 
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  // trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR）。
  // trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。
  // var orig = '   foo  ';
  // console.log(orig.trim()); // 'foo'
  var s = s.trim();
  
  var len = s.length;
  var count = 0;
  if (len === 0) return count
  for (let i = len - 1; i >= 0; i--, count++) {
    // charAt() 方法从一个字符串中返回指定的字符。
    // 从后向前找第一个空格
    if (s.charAt(i) === " ") return count;
  }
  return count
};
