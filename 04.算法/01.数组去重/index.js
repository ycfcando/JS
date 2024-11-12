/* 数组去重 */
function aryEli(ary) {
  const results = [];

  ary.forEach((value) => {
    const judge = results.find((v) => v === value);
    if (judge === undefined) {
      results.push(value);
    }
  });

  return results;
}
console.log(aryEli([1, 2, 3, 3, 4, 5, 6, 5]));
