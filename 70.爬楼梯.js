/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (44.68%)
 * Total Accepted:    36.6K
 * Total Submissions: 81.6K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 
 * 注意：给定 n 是一个正整数。
 * 
 * 示例 1：
 * 
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 * 
 * 示例 2：
 * 
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 * 
 * 
 */
/**
 * @param {number} n
 * @return {number}
 */

//  这道题主要是要明白该爬楼梯的规律其实就是符合斐波那契数列（Fibonacci Sequence） 规律的，问题就迎刃而解了。为什么说它是斐波那契数列呢？我们可以这样来思考：当我们从第 n-1 阶楼梯爬到第 n 阶楼梯时，需要1步；当我们从第 n-2 阶楼梯爬到第 n 阶楼梯时，需要2步.也就是说 到达第 n 阶楼梯的方法数等于到达第 n-1 阶楼梯的方法数加上到达第 n-2 阶楼梯的方法数，即f(n)=f(n-1)+f(n-2) ，其正好符合斐波那契通项。

var climbStairs = function (n) {
  let result = [1, 2];
  for (let i = 2; i < n; i++) {
    // console.log(i)
    // push() 方法将一个或多个元素添加到数组的末尾，并返回该数组的新长度。
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n - 1];
};

// function climbStairs(n) {
//   if (n === 1) return 1
//   if (n === 2) return 2
//   let sum = 0
//   sum = climbStairs(n - 1) + climbStairs(n - 2)
//   return sum
// }
// climbStairs(3)