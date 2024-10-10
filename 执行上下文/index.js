// 闭包
function fn1() {
  const a = 1;
  return function () {
    return a;
  };
}

console.log(fn1()());
