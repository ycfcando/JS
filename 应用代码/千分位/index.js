/* 千分位 */
function thousands(num) {
  const str = num.toString().split(".")[0];
  const result = str.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");

  return result;
}

console.log(thousands(12345678));
