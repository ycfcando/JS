/* 像forof、解构、都是对于迭代的运用，只要符合迭代协议都可以使用这些语法 */
function fn1() {
  const map = new Map([
    [1, "value1"],
    [2, "value2"],
    [3, "value3"],
  ]);

  for (const value of map) {
    console.log(value);
  }

  console.log(...map);
}
// fn1();

/* 一个迭代对象的具体构成 */
function fn2() {
  const obj = {
    index: 0,
    value: [1, 2, 3],
    // 可迭代协议的Symbol.iterator方法
    [Symbol.iterator]() {
      return this;
    },
    // 迭代器协议的next方法
    next() {
      // 符合IteratorResult接口的对象
      return {
        value: this.value[this.index++],
        done: this.index > this.value.length,
      };
    },
  };

  for (const value of obj) {
    console.log(value);
  }
}
fn2();
