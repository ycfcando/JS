// 数组扁平化
function flatArray(ary) {
  const result = ary.reduce((prev, next) => {
    const fNext = Array.isArray(next) ? flatArray(next) : [next];
    return prev.concat(fNext);
  }, []);

  return result;
}

const ary1 = [1, [2, 3, [4, 5]], [6, 7], 8, 9];
console.log(flatArray(ary1));
