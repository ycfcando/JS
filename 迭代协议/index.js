/* 遍历Map */
function fn1() {
  const map = new Map([
    [1, "value1"],
    [2, "value2"],
    [3, "value3"],
  ]);

  for (const value of map) {
    console.log(value);
  }
}

// fn1();

/* 实现一个可迭代对象 */
function fn2() {
  const obj = {
    value: [1, 2, 3],
  };

  obj[Symbol.iterator] = function () {
    let i = 0;
    return {
      next: () => {
        return {
          value: this.value[i++],
          done: i > this.value.length,
        };
      },
    };
  }.bind(obj);

  for (const value of obj) {
    console.log(value);
  }
}
fn2();

/* for...in和for...of的区别 */

// for...in用来迭代对象，且返回键，只能遍历可枚举属性和自有和原型属性
// for...of用来迭代可迭代对象，且返回值，只遍历可迭代协议定义的值
function fn3() {
  const obj = {
    a: 1,
    b: 2,
    c: 3,
  };
  const map = new Map([
    [1, "value1"],
    [2, "value2"],
    [3, "value3"],
  ]);
  for (const key in obj) {
    console.log("for...in", key);
  }
  for (const value of map) {
    console.log("for...of", value);
  }
}
// fn3();
