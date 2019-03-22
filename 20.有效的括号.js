/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (36.84%)
 * Total Accepted:    55.9K
 * Total Submissions: 151.2K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let old;
  while (s.length) {
    old = s;
    s = s.replace('{}', '').replace('[]', '').replace('()', '');
    if (old == s) return false;
  }
  return s == ''
};

// var isValid = function (s) {
//   let coupleMap = new Map();
//   coupleMap.set(')', '(');
//   coupleMap.set('}', '{');
//   coupleMap.set(']', '[');

//   if (s.length == 1) {
//     return false;
//   }

//   let stackArr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (coupleMap.has(s[i])) {
//       if (coupleMap.get(s[i]) != stackArr.pop()) {
//         return false;
//       }
//     } else {
//       stackArr.push(s[i]);
//     }
//   }

//   return stackArr.length ? false : true;
// };

// console.log(isValid(''))