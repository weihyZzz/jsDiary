// 递归版本，可以打印出情况数
function countWaysToDivideNumbers(n, k, minGroupSize, currentGroups = []) {
  if (n < k * minGroupSize) {
    return [];
  }

  if (k === 1 && n >= minGroupSize) {
    return [[n]];
  }

  let allWays = [];
  for (
    let groupSize = minGroupSize;
    groupSize <= n - (k - 1) * minGroupSize;
    groupSize++
  ) {
    const remainingGroups = countWaysToDivideNumbers(n - groupSize, k - 1, 2);
    for (const remainingGroup of remainingGroups) {
      allWays.push([[groupSize], ...remainingGroup]);
    }
  }

  // 添加当前分组情况到结果中
  return allWays;
}

const n = 8;
const k = 3;
const minGroupSize = 2;
const ways = countWaysToDivideNumbers(n, k, minGroupSize);
console.log(
  `将${n}个数分成${k}份，每份不少于${minGroupSize}个的分法有${ways.length}种。`
);
console.log("具体分组情况：", ways);
