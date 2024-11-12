/* for...in循环对象上的可枚举属性，包括原型上的，但没有顺序 */
function forin() {
  const object1 = Object.create({
    c: 3,
  });
  object1.a = 1;
  Object.defineProperty(object1, "b", {
    value: 2,
    enumerable: true,
  });

  for (const key in object1) {
    console.log(key);
  }
}
forin();

/* for...of循环迭代对象的迭代器，且有一定顺序 */
function forof() {
  const map1 = new Map([
    ["key1", 1],
    ["key2", 2],
    ["key3", 3],
  ]);

  for (const value of map1) {
    console.log(value);
  }
}
forof();
