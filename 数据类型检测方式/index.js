// typeof检测数据类型
function typeofShow() {
  // 判断准确类型
  console.log(
    "判断准确类型",
    typeof 1,
    typeof "字符",
    typeof true,
    typeof undefined,
    typeof Symbol(),
    typeof 11n
  );

  // null类型判断不符合观念
  console.log("null类型判断不符合观念", typeof null);

  // 无法精确判断引用类型
  console.log("无法精确判断引用类型", typeof {}, typeof []);
}
typeofShow();

// instanceof检测数据类型
function instanceofShow() {
  // 正确判断对象类型
  console.log("判断准确类型", {} instanceof Object, [] instanceof Array);

  // 无法判断原始类型
  console.log(
    "无法判断原始类型",
    1 instanceof Number,
    "字符" instanceof String
  );
}
instanceofShow();

// constructor检测数据类型
function constructorShow() {
  // 能够判断部分原始类型
  console.log(
    "能够判断部分原始类型",
    "字符".constructor === String,
    (1).constructor === Number,
    true.constructor === Boolean,
    Symbol().constructor === Symbol,
    BigInt(1).constructor === BigInt
  );

  // undefined, null类型无法判断
  try {
    console.log("undefined, null类型无法判断", undefined.constructor);
  } catch (err) {
    console.log(err);
  }
  try {
    console.log("undefined, null类型无法判断", null.constructor);
  } catch (err) {
    console.log(err);
  }

  // 构建函数的prototype可以被改变，可能无法正确判断
  function FNConstructor() {}
  FNConstructor.prototype = new Array();
  const fn1 = new FNConstructor();
  console.log(
    "构建函数的prototype可以被改变，可能无法正确判断",
    fn1.constructor,
    fn1.constructor === Array
  );
}
constructorShow();

// Object.prototype.toString.call()检测数据类型
function objToStringCallShow() {
  const a = Object.prototype.toString;

  // 内置类型都能判断
  console.log(
    "内置类型都能判断",
    a.call(2),
    a.call(true),
    a.call("str"),
    a.call([]),
    a.call(function () {}),
    a.call({}),
    a.call(undefined),
    a.call(null),
    a.call(Symbol()),
    a.call(1n)
  );

  // 自定义构造函数需要原型上定义Symbol.toStringTag属性才能准确判断
  function FNConstructor1() {}
  FNConstructor1.prototype[Symbol.toStringTag] = "FNConstructor1";
  const fn1 = new FNConstructor1();
  console.log(
    "自定义构造函数需要原型上定义Symbol.toStringTag属性才能准确判断",
    a.call(fn1)
  );
}
objToStringCallShow();
