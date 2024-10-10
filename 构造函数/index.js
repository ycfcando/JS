/* 实现new关键字 */
function objectFactory(constructor, ...arg) {
  // 创建一个空对象并继承构造函数的原型
  const newObject = Object.create(constructor.prototype);

  // 将构造函数的this绑定成创建的对象并执行
  const returnValue = constructor.apply(newObject, arg);

  // 判断返回值是一个对象且不等于null时则使用返回值否则使用创建的对象
  const result =
    returnValue && returnValue instanceof Object ? returnValue : newObject;

  return result;
}

function A() {
  return 1;
}

console.log(objectFactory(A));
