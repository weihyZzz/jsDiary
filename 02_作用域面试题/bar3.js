function countWaysToDivideNumbers(n, k, minGroupSize) {
  // 如果剩余的数字少于k份或者当前分组小于最小分组大小，则无法分配
  if (n < k * minGroupSize) {
    return 0;
  }
  // 如果只剩下一个分组，且剩余数字大于等于最小分组大小，则只有一种分法
  if (k === 1 && n >= minGroupSize) {
    return 1;
  }

  let ways = 0;
  // 尝试将当前的数字分配给剩余的部分
  for (
    let groupSize = minGroupSize;
    groupSize <= n - (k - 1) * minGroupSize;
    groupSize++
  ) {
    // 递归处理剩下的数字，减少分组数目和剩余数字
    ways += countWaysToDivideNumbers(n - groupSize, k - 1, 2);
  }
  return ways;
}

const n = 8; // 总共的数字个数
const k = 3; // 分成的份数
const minGroupSize = 2; // 每份至少包含的数字个数
const ways = countWaysToDivideNumbers(n, k, minGroupSize);
console.log(
  `将${n}个数分成${k}份，每份不少于${minGroupSize}个的分法有${ways}种。`
);
