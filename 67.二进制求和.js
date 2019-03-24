/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (46.91%)
 * Total Accepted:    19.1K
 * Total Submissions: 40.6K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 * 
 * 输入为非空字符串且只包含数字 1 和 0。
 * 
 * 示例 1:
 * 
 * 输入: a = "11", b = "1"
 * //12--20--100 二进制 遇二进一
 * 输出: "100"//
 * 
 * 示例 2:
 * 
 * 输入: a = "1010", b = "1011"
 * //2021--2101--10101
 * 输出: "10101"
 * 
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var as = a.split('').reverse();
  var bs = b.split('').reverse();
  var len = as.length > bs.length ? as.length : bs.length;
  for (let i = 0; i < len; i++) {
    // parseInt() 函数可解析一个字符串，并返回一个整数。 
    as[i] = (as[i] === undefined) ? 0 : parseInt(as[i]);
    bs[i] = (bs[i] === undefined) ? 0 : parseInt(bs[i]);
  }
  var str = [];
  var flag = 0;
  for (let i = 0; i < len; i++) {
    if (as[i] + bs[i] + flag === 2) {
      str[i] = 0;
      flag = 1;
    } else if (as[i] + bs[i] + flag === 3) {
      str[i] = 1;
      flag = 1;
    } else if (as[i] + bs[i] + flag === 1) {
      str[i] = 1;
      flag = 0;
    } else if (as[i] + bs[i] + flag === 0) {
      str[i] = 0;
      flag = 0;
    }
  }
  if (flag === 1) {
    str[str.length] = 1;
  }
  // 数组反转
  str = str.reverse();
  // 转为字符串
  return str.join('');
};
