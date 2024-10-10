// 判断属性是在自有属性上存在
const obj = {
  a: 1,
  b: undefined,
};
console.log(obj.hasOwnProperty("a"));
console.log(obj.hasOwnProperty("b"));
console.log(obj.hasOwnProperty("c"));
console.log(obj.hasOwnProperty("toString"));

// 原型获取
console.log(Object.getPrototypeOf(Object), Object.getPrototypeOf(obj));
console.log(obj.__proto__);
