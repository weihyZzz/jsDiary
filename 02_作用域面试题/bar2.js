function countWays(n, k) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (i < j * 2) {
        dp[i][j] = 0;
      } else if (i === j * 2) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i - 1][j] + (i - 2) * dp[i - 2][j - 1];
      }
    }
  }

  return dp[n][k];
}

// 示例用法
const n = 8; // 总数字个数
const k = 3; // 分组数
const ways = countWays(n, k);
console.log(`将${n}个数分成${k}份，每份不少于2个的分法总数为：${ways}`);
