/* apply和call */
function fn1() {
  const obj = {
    a: 1,
  };
  function test(b, c) {
    console.log(this.a, b, c);
  }

  // 传参传入通过数组方式传入，并且调用
  test.apply(obj, [2, 3]);
  // 传参传入通过一个一个参数方式传入，并且调用
  test.call(obj, 2, 3);
  // 传参传入通过一个一个参数方式传入，但不调用
  test.bind(obj, 2, 3)();
}
fn1();
