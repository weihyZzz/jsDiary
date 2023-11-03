function countWays(n, k) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

  // 初始化边界条件
  for (let i = 2; i <= n; i++) {
    dp[i][1] = 1;
  }

  for (let i = 2; i <= n; i++) {
    for (let j = 2; j <= k; j++) {
      // 不新开组和新开组的情况之和
      dp[i][j] = dp[i - 1][j] + dp[i - 2][j - 1];
    }
  }

  return dp[n][k];
}

// 示例用法
const n = 8; // 总数字个数
const k = 3; // 分组数
const ways = countWays(n, k);
console.log(`将${n}个数分成${k}份，每份不少于2个的分法总数为：${ways}`);
