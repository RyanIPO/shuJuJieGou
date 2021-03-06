/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 *
 * https://leetcode-cn.com/problems/add-strings/description/
 *
 * algorithms
 * Easy (43.71%)
 * Total Accepted:    5.5K
 * Total Submissions: 12.6K
 * Testcase Example:  '"0"\n"0"'
 *
 * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
 * 
 * 注意：
 * 
 * 
 * num1 和num2 的长度都小于 5100.
 * num1 和num2 都只包含数字 0-9.
 * num1 和num2 都不包含任何前导零。
 * 你不能使用任何內建 BigInteger 库， 也不能直接将输入的字符串转换为整数形式。
 * 
 * 
 */
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

  i = num1.length - 1;
  j = num2.length - 1;
  var sumStr = '';
  var carry = 0;

  while (i >= 0 || j >= 0 || carry > 0) {
    var a = 0,
      b = 0;
    if (i >= 0) {
      a = num1.charCodeAt(i) - 48;
      --i;
    }

    if (j >= 0) {
      b = num2.charCodeAt(j) - 48;
      --j;
    }

    sumStr = String.fromCharCode((a + b + carry) % 10 + 48) + sumStr;
    carry = Math.floor((a + b + carry) / 10);
  }

  return sumStr;

};
