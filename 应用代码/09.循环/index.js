/* for...in和for...of的区别 */
function fn1() {
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

  // for...in用来迭代对象，且返回键，只能遍历可枚举属性和自有和原型属性
  for (const key in obj) {
    console.log("for...in", key);
  }

  // for...of用来迭代可迭代对象，且返回值，只遍历迭代器提供的值。
  for (const value of map) {
    console.log("for...of", value);
  }
}
fn1();
