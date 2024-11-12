/* 防抖 */
function antiShake(cb, s, immediate = false) {
  let timer = null;

  return function (...ary) {
    typeof timer === "number" && clearTimeout(timer);
    immediate && timer === null && cb.apply(this, ary);

    timer = setTimeout(() => {
      !immediate && cb.apply(this, ary);
      timer = null;
    }, s * 1000);
  };
}

/* 节流 */
function throttle(cb, s, immediate = false) {
  let timer = null;

  return function (...ary) {
    immediate && timer === null && cb.apply(this, ary);

    if (timer === null) {
      timer = setTimeout(() => {
        !immediate && cb.apply(this, ary);
        timer = null;
      }, s * 1000);
    }
  };
}

document.getElementById("antiShake").addEventListener(
  "click",
  antiShake(() => console.log("防抖"), 1, true),
  false
);

document.getElementById("throttle").addEventListener(
  "click",
  throttle(() => console.log("节流"), 1, true),
  false
);
