/* Promise.all */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    promises.forEach((promise, index) => {
      promise
        .then((value) => {
          results[index] = value;
          const length = results.filter((v) => v !== undefined).length;
          if (length === promises.length) resolve(results);
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

/* 全都兑现 */
promiseAll([
  Promise.resolve(1),
  // Promise.reject(1),
  new Promise((resolve) => setTimeout(() => resolve(3), 2000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
])
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason));

/* 含有拒绝 */
promiseAll([
  Promise.resolve(1),
  new Promise((_, reject) => setTimeout(() => reject("失败1"), 2000)),
  new Promise((_, reject) => setTimeout(() => reject("失败2"), 3000)),
  new Promise((resolve) => setTimeout(() => resolve(2), 1000)),
])
  .then((value) => console.log(value))
  .catch((reason) => console.log(reason));
