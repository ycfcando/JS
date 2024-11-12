function newFn(constructor, ...arg) {
  // 创建空对象&将构造函数原型赋值给过对象内置属性proto
  const obj = Object.create(constructor.prototype);

  // 将构造函数的this绑定成创建的对象&执行构造函数
  const returnValue = constructor.apply(obj, arg);

  // 判断构造函数返回值，是对象返回对象，不是对象返回创建的对象
  return typeof returnValue === "object" && returnValue !== null
    ? returnValue
    : obj;
}

function Class1(name, age) {
  this.name = name;
  this.age = age;

  return this;
}

console.log(newFn(Class1, "ycf", 18));
