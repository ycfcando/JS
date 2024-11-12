/* 数组排序 */
function aryEli(ary) {
  const cloneAry = Array.from(ary);

  cloneAry.forEach((...arg) => {
    for (let i = 0; i < cloneAry.length - arg[1] - 1; i++) {
      const prev = cloneAry[i];
      const next = cloneAry[i + 1];
      if (prev > next) {
        cloneAry[i + 1] = prev;
        cloneAry[i] = next;
      }
    }
  });

  return cloneAry;
}
console.log(aryEli([9, 8, 7, 6, 5, 4, 3, 2, 1]));
