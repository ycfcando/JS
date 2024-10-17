// 将数字每千分位用逗号隔开
function fn1(num) {
  const str = num.toString();
  const ary = str.split(".");
  const strInt = ary[0];
  const result = [];
  let count = 0;

  for (let i = strInt.length - 1; i >= 0; i--) {
    result.unshift(str[i]);
    count += 1;

    if (count % 3 === 0) {
      result.unshift(",");
    }
  }

  return result.join("").concat(".").concat(ary[1]);
}

// console.log(fn1(1234567.89));

// 防抖
function fn2(cb, s, immediate) {
  let timer = null;

  return function (...args) {
    if (typeof timer === "number") clearTimeout(timer);
    if (immediate && timer === null) cb.apply(this, args);

    timer = setTimeout(() => {
      !immediate && cb.apply(this, args);
      timer = null;
    }, s);
  };
}

document.getElementById("fn2").addEventListener(
  "click",
  fn2(() => console.log(1), 500, true),
  false
);

// 节流
function fn3(cb, s, immediate = false) {
  let timer = null;

  return function (...args) {
    if (immediate && timer === null) cb.apply(this, args);

    if (timer === null) {
      timer = setTimeout(() => {
        !immediate && cb.apply(this, args);
        timer = null;
      }, s);
    }
  };
}

document.getElementById("fn3").addEventListener(
  "click",
  fn3(() => console.log(1), 500),
  false
);

// Promise.all
function fn4(promises) {
  return new Promise((resolve, reject) => {
    const result = [];
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          result[i] = value;
          const length = result.filter((v) => v !== undefined).length;
          if (length === promises.length) resolve(result);
        })
        .catch((reason) => reject(reason));
    }
  });
}

// fn4([
//   Promise.resolve(1),
//   // Promise.reject(1),
//   new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
//   new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
// ])
//   .then((value) => console.log(value))
//   .catch((reason) => console.log(reason));

// 深拷贝
function fn5(obj, newObj = {}) {
  const keys = Object.keys(obj);

  keys.forEach((key) => {
    if (typeof obj[key] === "object" && obj !== null) {
      newObj[key] = fn5(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

// const obj = {
//   a: {
//     b: 1,
//     c: 2,
//     d: {
//       e: 3,
//       f: 4,
//     },
//   },
//   g: 5,
// };

// const newObj = fn5(obj);
// newObj.a.d.e = 11;
// console.log(obj, newObj);

// 实现new操作符
function fn6(c, ...arg) {
  if (typeof c !== "function") {
    return;
  }

  const obj = Object.create(c.prototype, {});

  const result = c.apply(obj, arg);

  return typeof result === "object" ? result : obj;
}

// 柯里化函数
function fn7(fn) {
  return function curried(...arg) {
    if (arg.length >= fn.length) {
      return fn.apply(this, arg);
    } else {
      return function (...newArg) {
        return curried.apply(this, arg.concat(newArg));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}
const curriedSum = fn7(sum);
// console.log(curriedSum(1)(2)(3)); // 输出 6
// console.log(curriedSum(1, 2)(3)); // 输出 6

// 数组扁平化
function fn8(arr) {
  const result = arr.reduce((init, next) => {
    return Array.isArray(next) ? init.concat(fn8(next)) : init.concat(next);
  }, []);

  return result;
}

let nestedArray = [1, [2, [3, [4]], 5]];
// console.log(fn8(nestedArray)); // 输出 [1, 2, 3, 4, 5]
