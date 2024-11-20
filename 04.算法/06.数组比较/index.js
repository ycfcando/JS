/* 数组比较 */
class ArrayCompare {
  ary = [];

  constructor(ary) {
    this.ary = ary;
  }

  /* 数组去重 */
  static aryEli(ary, judgeCb) {
    const results = [];

    ary.forEach((value) => {
      const judge = results.find((v) =>
        judgeCb ? judgeCb(v, value) : v === value
      );
      if (judge === undefined) {
        results.push(value);
      }
    });

    return results;
  }

  /* 两两比较 */
  two(cb) {
    const compareAry = [];
    this.ary.forEach((value) => {
      compareAry.forEach((v, i) => {
        cb(v, value);
      });
      compareAry.push(value);
    });
  }

  /* 两两比较找出给定目标值 target */
  twoTarget(target, isEli = false) {
    const results = [];

    this.two((o, t) => {
      if (o + t === target) {
        results.push([o, t]);
      }
    });

    const resultsEli = ArrayCompare.aryEli(results, (o, t) =>
      o.includes(target - t[0])
    );

    return isEli ? resultsEli : results;
  }

  /* 3个之间比较 */
  three(cb) {
    const ary = this.ary;
    const length = ary.length;

    this.ary.forEach((value, index) => {
      for (let i = index + 1; i < length; i++) {
        for (let n = i + 1; n <= length; n++) {
          cb(value, ary[i], ary[n]);
        }
      }
    });
  }

  /* 3个之间的和满足给定目标值 */
  threeTarget(target) {
    const results = [];

    this.three((one, two, three) => {
      if (one + two + three === target) {
        results.push([one, two, three]);
      }
    });

    const resultEli = ArrayCompare.aryEli(results, (o, t) => {
      return (
        o.includes(target - t[0] - t[1]) && o.includes(target - t[1] - t[2])
      );
    });

    return resultEli;
  }
}

console.log(new ArrayCompare([1, 3, 5, 2, 4, 3, 3]).twoTarget(6, true));
console.log(new ArrayCompare([1, 3, 5, 2, 4, 3, 3]).threeTarget(8));
