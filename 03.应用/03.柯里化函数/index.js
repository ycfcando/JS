/* 多参数函数 */
function sum(a, b, c) {
  return a + b + c;
}

/* 柯里化函数 */
function currying(fn, length = fn.length) {
  return function (...args) {
    return args.length >= length
      ? fn.apply(this, args)
      : currying(fn.bind(this, ...args), length - args.length);
  };
}

/**
 * 假如前一个参数固定且我们需要多次使用函数
 * 会发现参数1总是重复使用
 */
const result1 = sum(1, 2, 3);
const result2 = sum(1, 4, 5);
const result3 = sum(1, 6, 7);
console.log(result1, result2, result3);

/**
 * 但如果使用柯里化函数将多参数函数处理后
 * 我们可以复用函数参数，从而达到简化的作用
 */
const curryingSum = currying(sum);
const curryingSumIs1 = curryingSum(1);
const result4 = curryingSumIs1(2, 3);
const result5 = curryingSumIs1(4, 5);
const result6 = curryingSumIs1(6, 7);
console.log(result4, result5, result6);
