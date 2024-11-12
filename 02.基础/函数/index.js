/**
 * 创建运用函数
 */
function fn(a) {
  // 函数内部参数this；指调用时绑定对象
  console.log(this);

  // 函数内部参数arguments；指调用时传递给函数的参数
  console.log(arguments);

  // 函数入参
  console.log(a);
}
fn(1);
