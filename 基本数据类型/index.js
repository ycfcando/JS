/* symbol和bigint的使用 */
function fn1() {
  // symbol
  const symbol = Symbol("描述..."); // 创建通过Symbol构造函数，可以带一个参数指用来描述唯一值的内容
  console.log(symbol); // 输出表现为Symbol(描述...)

  // bigint
  const bigint = BigInt("9007199254740991"); // 创建通过BigInt构造函数，可以带一个字符串参数表示数字的内容
  console.log(bigint); // 输出表现9007199254740991n
}
fn1();

/* 检测数据类型的方式 */
function fn2() {
  // typeof：可以判断大部分基本类型string、number、boolean、undefined、symbol、bigint
  // 还可以判断function类型
  // 但是无法准确判断引用数据类型：object、array、set、map等
  // 且null的判断结果不符合常识
  (function () {
    console.log("typeof------------------");
    // 可以准确判断的数据类型
    console.log(
      typeof "1",
      typeof 1,
      typeof true,
      typeof undefined,
      typeof Symbol("描述"),
      typeof BigInt("9007199254740991"),
      typeof (() => {})
    );
    // 不能准确判断的类型
    console.log(
      typeof new Map([["1", 1]]),
      typeof new Set([1, 2, 3]),
      typeof [],
      typeof null
    );
  })();

  // instanceof：通过判断给定的构造函数prototype是否出现在检测对象的原型链上，返回true或false
  // 无法判断原始数据类型：string、number、boolean、undefined、symbol、bigint
  // 判断引用数据类型时不够精确
  (function () {
    console.log("instanceof------------------");
    // 无法判断原始数据类型
    console.log(
      1 instanceof Number,
      "1" instanceof String,
      true instanceof Boolean,
      // undefined instanceof undefined, // 没有方式判断undefined会报错
      Symbol("描述") instanceof Symbol,
      BigInt("9007199254740991") instanceof BigInt
    );

    // 判断引用数据类型时不够精确
    console.log(
      [] instanceof Array,
      [] instanceof Object,
      new Map([["1", 1]]) instanceof Map,
      new Map([["1", 1]]) instanceof Object
    );
  })();

  // constructor：通过判断检测对象的constructor是否时给定的构造函数
  // 可以判断部分原始类型：string、number、boolean、symbol、bigint
  // 不能判断null、undefined
  // 可以正确判断引用类型
  (function () {
    console.log("constructor------------------");
    //  可以判断部分原始类型
    console.log(
      (1).constructor === Number,
      "1".constructor === String,
      true.constructor === Boolean,
      Symbol("描述").constructor === Symbol,
      BigInt("9007199254740991").constructor === BigInt
    );

    // 不能判断null、undefined
    console.log(
      "// 不能判断null、undefined"
      // undefined.constructor === undefined, // 会报错
      // null.constructor === null // 会报错
    );

    // 可以正确判断引用类型
    console.log(
      [].constructor === Array,
      [].constructor === Object,
      new Map([["1", 1]]).constructor === Map,
      new Map([["1", 1]]).constructor == Object
    );
  })();

  // Object.prototype.toString.call()：利用Object.prototype.toString会返回Symbol.toStringTag属性的值即数据类型描述来检测类型，使用call来改变上下文this
  // 所有内置类型都能判断
  (function () {
    console.log("Object.prototype.toString.call()------------------");
    //  所有内置类型都能判断
    const a = Object.prototype.toString;
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
  })();
}
fn2();
